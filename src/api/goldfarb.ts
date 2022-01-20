import axios, { AxiosRequestConfig } from 'axios';
import { nameToSlug } from './helpers/utils';
// import { isProductionEnvironment } from '../services/environment';

// const baseURL = isProductionEnvironment ? 'http://app.goldfarb.com.uy/main/api' : 'http://app.goldfarb.com.uy/PruebasMain/api';

const baseURL = 'http://app.goldfarb.com.uy/PruebasMain/api';

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

const makeProduct = (product: any) => {
    const code = product.code || product.itemCode;
    const subcategory = product.subcategory || product.subCategory || null;
    return {
        ...product,
        id: Number(code),
        slug: code,
        code,
        subcategory,
        unitMult: Number(product.unitMult),
        unitsPerItem: Number(product.unitsPerItem),
        // images: [`https://goldfarb.blob.core.windows.net/goldfarb/imagenes/${code}.jpg`],
        images: [`https://goldfarbbetascc.sana-cloud.net/product/image/large/${code}_0.jpg`],
        availability: product.hasStock ? 'in-stock' : 'out-of-stock',
        // compareAtPrice: product.discount > 0 ? product.price * (1 - (product.discount / 100 )) : undefined,
        brand: {
            name: product.brand,
            slug: nameToSlug(product.brand),
        },
    };
};

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
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/goldfarb/ProductLookup',
            method: 'post',
            data: options,
        };

        try {
            const { data } = await axios(config);

            data.products = data.products.map((product: any) => makeProduct(product));

            return data;
        } catch (error) {
            return {
                products: [],
            };
        }
    },

    getProductsLookup2: async (options: LookupOptions): Promise<{ products: any[] }> => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/ProductLookup',
            method: 'get',
            params: {
                cardcode: options.cardcode,
                itemcodes: options.itemcodes.join(','),
            },
        };

        try {
            const { data } = await axios(config);

            data.products = data.products.map((product: any) => makeProduct(product));

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

    getProductsSearch2: async (params: {
        term: string;
        cardcode?: string;
        orderby: string;
        family?: string;
        category?: string;
        subcategory?: string;
    }) => {
        // price-high-to-low or price-low-to-high
        // eslint-disable-next-line no-param-reassign
        params.orderby = params.orderby || 'relevance';

        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/ProductSearch',
            method: 'get',
            params,
        };

        const { data } = await axios(config);

        data.products = data.products.map((product: any) => makeProduct(product));

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
            url: '/goldfarb/InvoiceReturn',
            method: 'get',
            params: {
                docNum,
                cardcode,
            },
        };
        const { data } = await axios(config);

        return data;
    },

    recipe: async (docNum: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/goldfarb/clientRecipe',
            method: 'get',
            params: {
                docNum,
            },
        };

        const { data } = await axios(config);

        return data;
    },

    /**
     * Orders
     * */

    getOrderHeader: async (cardcode: string = '400092') => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/client/header',
            method: 'get',
            params: {
                cardcode,
            },
        };
        const { data } = await axios(config);

        return data;
    },

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

    getOrder: async (orderid: string, cardcode: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/order',
            method: 'get',
            params: {
                orderid,
                cardcode,
            },
        };
        const { data } = await axios(config);

        return data;
    },

    getOrders: async (cardcode: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/orders',
            method: 'get',
            params: {
                cardcode,
                start: '2021-01-01',
                end: '2021-12-31',
            },
        };
        const { data } = await axios(config);

        return data;
    },

    /**
     * Account
     * */

    getAccountStatus: async (cardcode: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/goldfarb/ClientState',
            method: 'get',
            params: {
                cardcode,
            },
        };
        const { data } = await axios(config);

        return data;
    },
};

export default goldfarbApi;
