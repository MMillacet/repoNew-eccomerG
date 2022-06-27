import AbstractFilterBuilder from './abstract';
import { ICategoryFilter, ICategoryFilterValue } from '../../interfaces/filter';
import { IProduct } from '../../interfaces/product';
import { ICategory } from '../../interfaces/category';
import { prepareCategory } from '../helpers/category';
import { nameToSlug } from '../helpers/utils';

const productHasCategory = (product: IProduct, category: string): boolean =>
    `${nameToSlug(product.family)}-${nameToSlug(product.category)}` === category ||
    `${nameToSlug(product.category)}-${nameToSlug(product.subcategory)}` === category ||
    `${nameToSlug(product.subcategory)}-${nameToSlug(product.subsubcategory)}` === category ||
    nameToSlug(product.family) === category;

export default class CategoryFilterBuilder extends AbstractFilterBuilder<ICategoryFilter> {
    value: ICategoryFilterValue = null;

    items: ICategory[] = [];

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
        const categoryHasProductsFn = (x: ICategory) => this.categoryHasProducts(x, products);

        if (category) {
            // this.items = prepareCategory(category, 2).children;
            this.items = [prepareCategory(category, 3)].map((x) => ({
                ...x,
                children: x.children === undefined ? [] : x.children.filter(categoryHasProductsFn),
            }));
        } else {
            this.items = categoriesTreeData.map((x: any) => prepareCategory(x)).filter(categoryHasProductsFn);
        }
    }

    categoryHasProducts = (category: ICategory, products: IProduct[]) => {
        const hasCategory = (product: IProduct, category: ICategory): boolean =>
            `${nameToSlug(product.family)}-${nameToSlug(product.category)}` === category.slug ||
            `${nameToSlug(product.category)}-${nameToSlug(product.subcategory)}` === category.slug ||
            `${nameToSlug(product.subcategory)}-${nameToSlug(product.subsubcategory)}` === category.slug ||
            nameToSlug(product.family) === category.slug;

        // return false;
        return products.reduce((acc, product) => acc || hasCategory(product, category), false);
    };

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
