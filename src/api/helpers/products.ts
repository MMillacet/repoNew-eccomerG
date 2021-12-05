// import CategoryFilterBuilder from '../filters/category';
import CheckFilterBuilder from '../filters/check';
// import RadioFilterBuilder from '../filters/radio';
import RangeFilterBuilder from '../filters/range';
import { IProduct, IProductsList } from '../interfaces/product';
import goldfarbApi from '../goldfarb';

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

const searchCache: { [term: string]: IProduct[] } = {};

export async function getProductsList(
    cardcode: string | null,
    search: string | null,
    options: GetProductsListOptions = {},
    filterValues: GetProductsListFilters = {},
): Promise<IProductsList> {
    const filters = [
        // new CategoryFilterBuilder('category', 'Categories'),
        new RangeFilterBuilder('price', 'Price'),
        new CheckFilterBuilder('brand', 'Brand'),
        // new RadioFilterBuilder('discount', 'Discount'),
    ];

    let searchProducts;

    // only cache in client side
    const isBrowser = typeof window !== 'undefined';

    // Try to gather search results from cache, otherwise fetch them from the API
    if (isBrowser && search && searchCache[search]) {
        searchProducts = searchCache[search];
    } else {
        const { products } = await goldfarbApi.getProductsSearch2(
            search || '',
            cardcode || '400092',
            'relevance',
        );
        if (isBrowser && search) searchCache[search] = products;
        searchProducts = products;
    }

    let items = searchProducts.slice(0);

    filters.forEach((filter) => filter.makeItems(items, filterValues[filter.slug]));

    // Calculate items count for filter values.
    filters.forEach((filter) => filter.calc(filters));

    // Apply filters to products list.
    items = items.filter((product: IProduct) =>
        filters.reduce<boolean>((mr, filter) => mr && filter.test(product), true),
    );

    const page = options.page || 1;
    const limit = options.limit || 12;
    const sort = options.sort || 'default';
    const total = items.length;
    const pages = Math.ceil(total / limit);
    const from = (page - 1) * limit + 1;
    const to = Math.max(Math.min(page * limit, total), from);

    items = items.sort((a: { title: string }, b: { title: string }) => {
        if (['name_asc', 'name_desc'].includes(sort)) {
            if (a.title === b.title) {
                return 0;
            }

            return (a.title > b.title ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
        }

        return 0;
    });

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
