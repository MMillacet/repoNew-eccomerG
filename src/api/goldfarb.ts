import axios, { AxiosRequestConfig } from 'axios';
import { nameToSlug } from './helpers/utils';

const baseURL = 'http://app.goldfarb.com.uy/main/api';
// const baseTestUrl = 'http://app.goldfarb.com.uy/PruebasMain/api';

export interface LookupOptions {
    itemcodes: string[];
    cardcode?: string;
}

export interface SearchOptions {
    family?: string;
    category?: string;
    subcategory?: string;
    term?: string;
    orderBy?: string;
}

const goldfarbApi = {
    /**
     * Configuration
     * */

    getExchangeRate: async () => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/Configuration/ExchangeRate',
            method: 'GET',
        };
        const { data } = await axios(config);

        return data;
    },

    getMinTransportCharge: async () => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/Configuration/ChargeTransportMinAmount',
            method: 'get',
        };
        const { data } = await axios(config);

        return data;
    },

    /**
     * Products
     * */
    getFamilies: async () => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/goldfarb/getFamilies',
            method: 'GET',
        };
        const { data } = await axios(config);

        return data;
    },

    getProductsLookup: async (options: LookupOptions): Promise<{ products: any[] }> => {
        // eslint-disable-next-line no-param-reassign
        options.cardcode = options.cardcode || '4000092';

        const config: AxiosRequestConfig = {
            baseURL,
            url: '/goldfarb/ProductLookup',
            method: 'post',
            data: options,
        };

        try {
            const { data } = await axios(config);

            data.products = data.products.map((product: any) => ({
                id: Number(product.code),
                slug: product.code,
                subcategory: product.subCategory,
                images: [
                    `https://goldfarbbetascc.sana-cloud.net/product/image/large/${product.code}_0.jpg`,
                ],
                availability: product.hasStock ? 'in-stock' : 'out-of-stock',
                // compareAtPrice: product.discount > 0 ? product.price * (1 - (product.discount / 100 )) : undefined,
                ...product,
                brand: {
                    name: product.brand,
                    slug: nameToSlug(product.brand),
                },
            }));

            return data;
        } catch (error) {
            return {
                products: [],
            };
        }
    },

    getProductsLookup2: async (options: LookupOptions): Promise<{ products: any[] }> => {
        // eslint-disable-next-line no-param-reassign
        options.cardcode = options.cardcode || '4000092';

        const config: AxiosRequestConfig = {
            baseURL,
            url: `/web/ProductLookup?cardcode=${
                options.cardcode
            }&itemcodes=${options.itemcodes.join(',')}`,
            method: 'get',
        };

        try {
            const { data } = await axios(config);

            data.products = data.products.map((product: any) => ({
                id: Number(product.itemCode),
                code: product.itemCode,
                slug: product.itemCode,
                subcategory: product.subCategory,
                images: [
                    `https://goldfarbbetascc.sana-cloud.net/product/image/large/${product.itemCode}_0.jpg`,
                ],
                availability: product.hasStock ? 'in-stock' : 'out-of-stock',
                // compareAtPrice: product.discount > 0 ? product.price * (1 - (product.discount / 100 )) : undefined,
                ...product,
                brand: {
                    name: product.brand,
                    slug: nameToSlug(product.brand),
                },
                price: product.price || product.finalPrice,
            }));

            return data;
        } catch (error) {
            return {
                products: [],
            };
        }
    },

    getProductsSearch: async (options: SearchOptions) => {
        // price-high-to-low or price-low-to-high
        // eslint-disable-next-line no-param-reassign
        options.orderBy = options.orderBy || 'relevance';
        const config: AxiosRequestConfig = options.family
            ? {
                  baseURL,
                  url: `/goldfarb/Outlet?family=${options.family}`,
                  method: 'get',
              }
            : {
                  baseURL,
                  url: '/goldfarb/ProductSearch',
                  method: 'post',
                  data: options,
              };

        const { data } = await axios(config);

        return data;
    },

    getProductsSearch2: async (
        term: string = '',
        cardcode: string,
        orderby: string,
        family?: string,
        category?: string,
        subcategory?: string,
    ) => {
        // price-high-to-low or price-low-to-high
        // eslint-disable-next-line no-param-reassign
        orderby = orderby || 'relevance';

        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/ProductSearch',
            method: 'get',
            params: {
                term,
                orderby,
                cardcode,
                family,
                category,
                subcategory,
            },
        };

        const { data } = await axios(config);

        data.products = data.products.map((product: any) => ({
            id: Number(product.itemCode),
            code: product.itemCode,
            slug: product.itemCode,
            subcategory: product.subCategory,
            images: [
                `https://goldfarbbetascc.sana-cloud.net/product/image/large/${product.itemCode}_0.jpg`,
            ],
            availability: product.hasStock ? 'in-stock' : 'out-of-stock',
            // compareAtPrice: product.discount > 0 ? product.price * (1 - (product.discount / 100 )) : undefined,
            ...product,
            brand: {
                name: product.brand,
                slug: nameToSlug(product.brand),
            },
            price: product.price || product.finalPrice,
        }));

        return data;
    },

    getProductsList: async () => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/goldfarb/ProductsList',
            method: 'get',
        };

        const { data } = await axios(config);

        return data;
    },

    /**
     * Documents
     * */

    invoice: async (docNum: string, cardcode: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: `/goldfarb/Invoice?docNum=${docNum}&cardcode=${cardcode}`,
            method: 'get',
        };

        const { data } = await axios(config);

        return data;
    },

    invoiceReturn: async (docNum: string, cardcode: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: `/goldfarb/InvoiceReturn?docNum=${docNum}&cardcode=${cardcode}`,
            method: 'get',
        };
        const { data } = await axios(config);

        return data;
    },

    recipe: async (docNum: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: `/goldfarb/clientRecipe?docNum=${docNum}`,
            method: 'get',
        };

        const { data } = await axios(config);

        return data;
    },

    /**
     * Orders
     * */

    // todo: model order
    postOrder: async (order: any) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/goldfarb/CreateOrder',
            method: 'post',
            data: order,
        };
        const { data } = await axios(config);

        return data;
    },
};

export default goldfarbApi;
