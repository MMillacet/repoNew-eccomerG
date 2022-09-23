import axios, { AxiosRequestConfig } from 'axios';
import { IGoldfarbInvoice } from '../interfaces/invoice';
import { nameToSlug } from './helpers/utils';
// import { isProductionEnvironment } from '../services/environment';

// const baseURL = 'http://app.goldfarb.com.uy/PruebasMain/api';
// const baseURL = 'http://localhost:50483/api';

const baseURL = 'http://app.goldfarb.com.uy/main/api';

export interface CatalogOptions {
    email: string;
    itemcodes: string[];
    price: boolean;
    iva: boolean;
    multiplier: number;
}

export interface LookupOptions {
    itemcodes: string[];
    cardcode?: string;
    withDesc?: string;
}

const makeProduct = (product: any) => {
    const code = product.code || product.itemCode;
    const subcategory = product.subcategory || product.subCategory || null;
    const subsubcategory = product.subsubcategory || product.subSubCategory || null;
    const currency = product.currency === 'U$' ? 'U$D' : product.currency;

    return {
        ...product,
        id: Number(code),
        slug: code,
        code,
        subcategory,
        subsubcategory,
        unitMult: Number(product.unitMult),
        unitsPerItem: product.unitsPerItem,
        currency,
        images: [`https://goldfarb.blob.core.windows.net/goldfarb/imagenes/${code}.jpg`],
        // images: [`https://goldfarbbetascc.sana-cloud.net/product/image/large/${code}_0.jpg`],
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

    getServiceStatus: async (docNum: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/servicestatus',
            method: 'get',
            params: {
                docNum,
            },
        };
        const { data } = await axios(config);

        return data;
    },

    isClientValid: async (cardcode: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/validclient',
            method: 'get',
            params: {
                cardcode,
            },
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
            url: '/web/getFamilies',
            method: 'GET',
        };
        const { data } = await axios(config);

        return data;
    },

    // getProductsLookup: async (options: LookupOptions): Promise<{ products: any[] }> => {
    //     const config: AxiosRequestConfig = {
    //         baseURL,
    //         url: '/goldfarb/ProductLookup',
    //         method: 'post',
    //         data: options,
    //     };

    //     try {
    //         const { data } = await axios(config);

    //         data.products = data.products.map((product: any) => makeProduct(product));

    //         return data;
    //     } catch (error) {
    //         return {
    //             products: [],
    //         };
    //     }
    // },

    getProductsLookup: async (options: LookupOptions) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/ProductLookup',
            method: 'get',
            params: {
                cardcode: options.cardcode,
                itemcodes: options.itemcodes.join(','),
                withDesc: options.withDesc,
            },
        };

        try {
            const { data } = await axios(config);

            data.products = data.products.map((product: any) => makeProduct(product));

            return data;
        } catch (error) {
            console.log(error);
            return {
                products: [],
            };
        }
    },

    getProductsSearch: async (params: {
        term: string;
        cardcode?: string;
        orderby?: string;
        family?: string;
        category?: string;
        subcategory?: string;
        subsubcategory?: string;
        brand?: string;
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
            url: '/web/ProductsList',
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

    recipe: async (docNum: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/clientRecipe',
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

    getOrderHeader: async (cardcode: string) => {
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
            url: '/web/CreateOrder',
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
                start: '2000-01-01',
                end: '2022-12-31',
            },
        };
        const { data } = await axios(config);

        return data;
    },

    /**
     * Account
     * */

    getInvoice: async (invoiceId: string, cardcode: string): Promise<IGoldfarbInvoice> => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/Invoice',
            method: 'get',
            params: {
                docNum: invoiceId,
                cardcode,
            },
        };
        const { data } = await axios(config);

        return data;
    },

    getInvoiceReturn: async (invoiceId: string, cardcode: string): Promise<IGoldfarbInvoice> => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/InvoiceReturn',
            method: 'get',
            params: {
                docNum: invoiceId,
                cardcode,
            },
        };
        const { data } = await axios(config);

        return data;
    },

    getReceipt: async (invoiceId: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/clientRecipe',
            method: 'get',
            params: {
                docNum: invoiceId,
                // cardcode, why no cardcode?
            },
        };
        const { data } = await axios(config);
        return data;
    },

    getAccountStatus: async (cardcode: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/ClientState',
            method: 'get',
            params: {
                cardcode,
            },
        };
        const { data } = await axios(config);

        return data;
    },

    createCatalog: async (options: CatalogOptions) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/CreateCatalog',
            method: 'post',
            data: options,
        };
        const { data } = await axios(config);

        return data;
    },

    sendActivationEmail: async (cardcode: string, email: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/ClientRegisterNotice',
            method: 'get',
            params: { cardcode, email },
        };
        const { data } = await axios(config);

        return data;
    },

    getShipping: async (params: { total: number; tipoPedido: string; cardcode: string }) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/getshipping',
            method: 'get',
            params,
        };
        const { data } = await axios(config);

        return data;
    },

    getPromoProducts: async (docEntry: number, cardcode: number) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/getpromolines',
            method: 'get',
            params: {
                docEntry,
                cardcode,
            },
        };
        const { data } = await axios(config);

        return data;
    },

    getPromos: async (cardcode: number) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/getpromos',
            method: 'get',
            params: {
                cardcode,
            },
        };
        const { data } = await axios(config);

        return data;
    },

    getPromo: async (docEntry: number, cardcode: number) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/getpromo',
            method: 'get',
            params: {
                cardcode,
                docEntry,
            },
        };
        const { data } = await axios(config);

        return data;
    },

    postPromo: async (orderPromoWeb: any) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/createorderpromo',
            method: 'post',
            params: {
                orderPromoWeb,
            },
        };
        const { data } = await axios(config);

        return data;
    },

    getEmployes: async () => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/Employes',
            method: 'get',
        };
        const { data } = await axios(config);

        return data;
    },
};

export default goldfarbApi;
