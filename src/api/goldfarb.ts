import axios, { AxiosRequestConfig } from 'axios';

const baseURL = 'http://app.goldfarb.com.uy/main/api';

export interface LookupOptions {
    itemcodes: string[];
    cardcode?: string;
}

export interface SearchOptions {
    family: string;
    category: string;
    subcategory: string;
    term: string;
    orderBy: string;
}

const goldfarbApi = {
    /**
     * Configuration
     **/

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
     **/

    getProductsLookup: async (options: LookupOptions) => {
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
                id: product.code,
                slug: product.code,
                images: [`https://goldfarbbetascc.sana-cloud.net/product/image/large/${product.code}_0.jpg`],
                ...product,
            }));
    
            return data;
        } catch (error) {
            console.log(error);
            return {
                products: [],
            };
        }
    },

    getProductsSearch: async (options: SearchOptions) => {
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

    /**
     * Documents
     **/

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
     **/

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