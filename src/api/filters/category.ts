import AbstractFilterBuilder from './abstract';
import { ICategoryFilter, ICategoryFilterValue } from '../../interfaces/filter';
import { IProduct } from '../../interfaces/product';
import { IShopCategory } from '../../interfaces/category';
import { prepareCategory } from '../helpers/category';

const productHasCategory = (product: IProduct, category: string): boolean =>
    product.family?.toLowerCase() === category ||
    product.category?.toLowerCase() === category ||
    product.subcategory?.toLowerCase() === category;

export default class CategoryFilterBuilder extends AbstractFilterBuilder<ICategoryFilter> {
    value: ICategoryFilterValue = null;

    items: IShopCategory[] = [];

    categoriesData: any;

    constructor(slug: string, name: string, categoriesData: any) {
        super(slug, name);
        this.categoriesData = categoriesData;
    }

    test(product: IProduct) {
        if (this.value === null) {
            return true;
        }

        return productHasCategory(product, this.value);
    }

    makeItems(products: IProduct[], value?: string): void {
        this.productsData = products;
        this.value = value || null;

        const { categoriesListData, categoriesTreeData } = this.categoriesData;

        const category = categoriesListData.find((x: { slug: string }) => x.slug === value);
        const categoryHasProductsFn = (x: IShopCategory) => this.categoryHasProducts(x, products);

        if (category) {
            this.items = [prepareCategory(category, 1)].map((x) => ({
                ...x,
                children: x.children === undefined ? [] : x.children.filter(categoryHasProductsFn),
            }));
        } else {
            this.items = categoriesTreeData.map((x: any) => prepareCategory(x)).filter(categoryHasProductsFn);
        }
    }

    categoryHasProducts = (category: IShopCategory, products: IProduct[]) =>
        products.reduce((acc, product) => acc || productHasCategory(product, category.slug), false);

    // eslint-disable-next-line class-methods-use-this
    calc(): void {}

    build(): ICategoryFilter {
        return {
            type: 'category',
            slug: this.slug,
            name: this.name,
            items: this.items,
            value: this.value,
        };
    }
}
