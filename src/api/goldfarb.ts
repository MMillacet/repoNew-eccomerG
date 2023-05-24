import axios, { AxiosRequestConfig } from 'axios';
import { IGoldfarbInvoice } from '../interfaces/invoice';
import { CartItemSave } from '../store/cart/cartTypes';
import { nameToSlug } from './helpers/utils';
// import { isProductionEnvironment } from '../services/environment';

//const baseURL = 'http://app.goldfarb.com.uy/PruebasMain/api';
//const baseURL = 'http://localhost:50483/api';

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
    const { currency } = product;

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
        availability: product.hasStock ? 'in-stock' : 'out-of-stock',
        brand: {
            name: product.brand,
            slug: nameToSlug(product.brand),
        },
    };
};

const goldfarbApi = {
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

    getProductLookup: async (itemcodes: string, cardcode?: string, withDesc?: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/productlookup',
            method: 'get',
            params: {
                cardcode,
                itemcodes,
                withDesc,
            },
        };

        try {
            const { data } = await axios(config);
            const code = data.products[0].code || data.products[0].itemCode;
            const subcategory = data.products[0].subcategory || data.products[0].subCategory || null;
            const subsubcategory = data.products[0].subsubcategory || data.products[0].subSubCategory || null;

            return {
                ...data.products[0],
                id: Number(code),
                slug: code,
                code,
                subcategory,
                subsubcategory,
                unitMult: Number(data.unitMult),
                unitsPerItem: data.unitsPerItem,
            };
        } catch (error) {
            console.log(error);
            return {
                products: [],
            };
        }
    },

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
                end: new Date(),
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
            data: orderPromoWeb,
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
    getProducts: async (productNumbers: string, cardcode: number) => {
        const { products } = await fetch(`/api/products/lookup?itemcodes=${[`${productNumbers}`]}&cardcode=${cardcode}&withDesc=true`).then(
            (res) => res.json(),
        );
        return products[0];
    },
    getCart: async (cardcode: string, email: string) => {
        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/GetCart',
            method: 'get',
            params: {
                cardcode,
                email,
            },
        };
        const { data } = await axios(config);

        return data;
    },
    saveCart: async (lines: CartItemSave[], cardcode: string, email: string) => {
        const cart = {
            cardcode,
            email,
            lines,
        };

        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/SaveCart',
            method: 'post',
            data: cart,
        };
        const { data } = await axios(config);

        return data;
    },
    getRepairs: async (cardcode: string, start?: string, end?: string) => {
        const threeMonthsAgo = new Date(new Date().getFullYear(), new Date().getMonth() - 24, new Date().getDate());
        const params = {
            cardcode,
            start: start ?? threeMonthsAgo,
            end: end ?? new Date(),
        };

        const config: AxiosRequestConfig = {
            baseURL,
            url: '/web/services',
            method: 'get',
            params,
        };
        const { data } = await axios(config);
        return data;
    },
};

export default goldfarbApi;
