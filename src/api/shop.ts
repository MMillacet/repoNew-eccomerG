/* eslint-disable @typescript-eslint/no-unused-vars,arrow-body-style */
import families from '../data/families.json';
import { ICategory } from '../interfaces/category';
import { IProduct, IProductsList } from '../interfaces/product';
import { IFilterValues, IListOptions } from '../interfaces/list';
import {
    getDiscountedProducts,
    getFeaturedProducts,
    getLatestProducts,
    getPopularProducts,
    getRelatedProducts,
    getSuggestions,
    getTopRatedProducts,
} from '../fake-server/endpoints/products';

import goldfarbApi from './goldfarb';
import { familiesToCategories, makeShopCategory, prepareCategory, walkTree } from './helpers/category';
import { getProductsList } from './helpers/products';
import { ISearchOptions } from '../interfaces/search';

export interface GetCategoriesOptions {
    depth?: number;
}

export interface GetCategoryBySlugOptions {
    depth?: number;
}

export interface GetRelatedProductsOptions {
    limit?: number;
}

export interface GetProductsOptions {
    limit?: number;
    category?: string;
}

export type GetSuggestionsOptions = {
    limit?: number;
    category?: string;
};

const getCategoriesData = async () => {
    const f = families || (await goldfarbApi.getFamilies());
    const categories = familiesToCategories(f);
    const [categoriesTreeData, categoriesListData] = walkTree(makeShopCategory, categories);
    return { categoriesTreeData, categoriesListData };
};

const shopApi = {
    getCategoriesData: async () => {
        return getCategoriesData();
    },
    /**
     * Returns array of categories.
     */
    getCategories: async (options: GetCategoriesOptions = {}): Promise<ICategory[]> => {
        const { categoriesTreeData } = await getCategoriesData();
        return categoriesTreeData.map((x) => prepareCategory(x, options.depth));
    },
    /**
     * Returns category by slug.
     */
    getCategoryBySlug: async (slug: string): Promise<ICategory> => {
        const { categoriesListData } = await getCategoriesData();
        const category = categoriesListData.find((x) => x.slug === slug);
        return category ? Promise.resolve(prepareCategory(category, 2)) : Promise.reject();
    },
    /**
     * Returns product.
     */
    getProductById: async (id: string): Promise<IProduct> => {
        const {
            products: [product],
        } = await goldfarbApi.getProductsLookup({ itemcodes: [id] });
        return product;
    },
    /**
     * Returns array of related products.
     */
    getRelatedProducts: (slug: string, options: GetRelatedProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/screwdriver-a2017/related.json&limit=3
         *
         * where:
         * - screwdriver-a2017 = slug
         * - limit             = options.limit
         */
        // return fetch(`https://example.com/api/products/${slug}/related.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getRelatedProducts(slug, options);
    },
    /**
     * Return products list.
     */
    getProductsList: async (
        options: IListOptions = {},
        filters: IFilterValues = {},
        searchOptions: ISearchOptions = {},
    ): Promise<IProductsList> => {
        const categoriesData = await shopApi.getCategoriesData();
        return getProductsList(options, filters, searchOptions, categoriesData);
    },
    /**
     * Returns array of featured products.
     */
    getFeaturedProducts: (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/featured-products.json?limit=3&category=power-tools
         *
         * where:
         * - 3           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/featured-products.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getFeaturedProducts(options);
    },
    /**
     * Returns array of latest products.
     */
    getLatestProducts: (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/latest-products.json?limit=3&category=power-tools
         *
         * where:
         * - 3           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/latest-products.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getLatestProducts(options);
    },
    /**
     * Returns an array of top rated products.
     */
    getTopRatedProducts: (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/top-rated-products.json?limit=3&category=power-tools
         *
         * where:
         * - 3           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/top-rated-products.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getTopRatedProducts(options);
    },
    /**
     * Returns an array of discounted products.
     */
    getDiscountedProducts: (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/discounted-products.json?limit=3&category=power-tools
         *
         * where:
         * - 3           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/discounted-products.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getDiscountedProducts(options);
    },
    /**
     * Returns an array of most popular products.
     */
    getPopularProducts: (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/popular-products.json?limit=3&category=power-tools
         *
         * where:
         * - 3           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/popular-products.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getPopularProducts(options);
    },
    /**
     * Returns search suggestions.
     */
    getSuggestions: (query: string, options: GetSuggestionsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/search/suggestions.json?query=screwdriver&limit=5&category=power-tools
         *
         * where:
         * - screwdriver = query
         * - 5           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/search/suggestions.json?${qs.stringify({ ...options, query })}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getSuggestions(query, options);
    },
};

export default shopApi;
