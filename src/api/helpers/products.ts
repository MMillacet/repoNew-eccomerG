import queryString from 'query-string';
import CategoryFilterBuilder from '../filters/category';
import CheckFilterBuilder from '../filters/check';
// import RadioFilterBuilder from '../filters/radio';
// import RangeFilterBuilder from '../filters/range';
import goldfarbApi from '../goldfarb';
import { ISearchOptions } from '../../interfaces/search';
import { ICategory } from '../../interfaces/category';
import { IProduct, IProductsList } from '../../interfaces/product';

export interface GetProductsOptions {
    limit?: number;
    category?: string;
}

export interface GetProductsListOptions {
    page?: number;
    limit?: number;
    sort?: string;
}

export interface GetProductsListFilters {
    [filterSlug: string]: string;
}

const searchCache: { [query: string]: IProduct[] } = {};

export async function getProductsList(
    options: GetProductsListOptions = {},
    filterValues: GetProductsListFilters = {},
    searchOptions: ISearchOptions = {},
    categoriesData: { categoriesTreeData: ICategory[]; categoriesListData: ICategory[] },
): Promise<IProductsList> {
    const filters = [
        new CategoryFilterBuilder('category', 'Categorias', categoriesData),
        // new RangeFilterBuilder('price', 'Price'),
        new CheckFilterBuilder('brand', 'Marcas'),
        // new RadioFilterBuilder('discount', 'Discount'),
    ];

    const { term, cardcode, family, category, subcategory, subsubcategory, brand } = searchOptions;

    let searchProducts;

    // only cache in client side
    const isBrowser = typeof window !== 'undefined';

    const cacheKey = queryString.stringify(searchOptions);

    // Try to gather search results from cache, otherwise fetch them from the API
    if (isBrowser && cacheKey && searchCache[cacheKey]) {
        searchProducts = searchCache[cacheKey];
    } else {
        let products: IProduct[];

        if (isBrowser) {
            const url = new URL('/api/products/search', document.baseURI);
            url.searchParams.append('term', term || '');
            if (family) url.searchParams.append('family', family as string);
            if (category) url.searchParams.append('category', category as string);
            if (subcategory) url.searchParams.append('subcategory', subcategory as string);
            if (subsubcategory) url.searchParams.append('subsubcategory', subsubcategory as string);
            if (brand) url.searchParams.append('brand', brand as string);

            ({ products } = await (await fetch(url.toString())).json());
        } else {
            ({ products } = await goldfarbApi.getProductsSearch({
                term: term || '',
                cardcode,
                orderby: 'relevance',
                family,
                category,
                subcategory,
                subsubcategory,
                brand,
            }));
        }
        if (isBrowser && cacheKey) searchCache[cacheKey] = products;
        searchProducts = products;
    }

    let items = searchProducts.slice(0);

    filters.forEach((filter) => filter.makeItems(items, filterValues[filter.slug]));

    // Calculate items count for filter values.
    filters.forEach((filter) => filter.calc(filters));

    // Apply filters to products list.
    items = items.filter((product: IProduct) => filters.reduce<boolean>((mr, filter) => mr && filter.test(product), true));

    const page = options.page || 1;
    const limit = options.limit || 12;
    const sort = options.sort || 'default';
    const total = items.length;
    const pages = Math.ceil(total / limit);
    const from = (page - 1) * limit + 1;
    const to = Math.max(Math.min(page * limit, total), from);

    items = items.sort(
        (a: { title: string; finalPrice: number; listOrder: string }, b: { title: string; finalPrice: number; listOrder: string }) => {
            if (['name_asc', 'name_desc'].includes(sort)) {
                if (a.title.toUpperCase() === b.title.toUpperCase()) {
                    return 0;
                }

                return (a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
            }

            if (['price_asc', 'price_desc'].includes(sort)) {
                if (a.finalPrice === b.finalPrice) {
                    return 0;
                }

                return (a.finalPrice > b.finalPrice ? 1 : -1) * (sort === 'price_asc' ? 1 : -1);
            }

            if (['list_asc', 'list_desc'].includes(sort)) {
                if (a.listOrder === b.listOrder) {
                    return 0;
                }

                return (a.listOrder > b.listOrder ? 1 : -1) * (sort === 'list_asc' ? 1 : -1);
            }

            return 0;
        },
    );

    const start = (page - 1) * limit;
    const end = start + limit;

    items = items.slice(start, end);

    return {
        page,
        limit,
        sort,
        total,
        pages,
        from,
        to,
        items,
        filters: filters.map((x) => x.build()),
    };
}
