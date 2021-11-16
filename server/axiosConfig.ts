import { AxiosRequestConfig } from 'axios';
import { SearchOptions } from './models/searchOptions';
import { LookupOptions } from './models/lookupOptions';

const baseURL = 'http://app.goldfarb.com.uy/main/api';

const latestProducts = (): AxiosRequestConfig => ({
    baseURL,
    url: '/goldfarb/LatestProducts',
    method: 'get',
});

const outlet = (family: string): AxiosRequestConfig => ({
    baseURL,
    url: `/goldfarb/Outlet?family=${family}`,
    method: 'get',
});

// todo: add type to options
const productLookup = (options: LookupOptions): AxiosRequestConfig => ({
    baseURL,
    url: '/goldfarb/ProductLookup',
    method: 'post',
    data: options,
});

// todo: add type to options
const productSearch = (options: SearchOptions): AxiosRequestConfig => ({
    baseURL,
    url: '/goldfarb/ProductSearch',
    method: 'post',
    data: options,
});

const getFamilies = (): AxiosRequestConfig => ({
    baseURL,
    url: '/goldfarb/GetFamilies',
    method: 'get',
});

const clientHeader = (cardcode: string): AxiosRequestConfig => ({
    baseURL,
    url: `/Client/Header?cardcode=${cardcode}`,
    method: 'get',
});

const clientState = (cardcode: string): AxiosRequestConfig => ({
    baseURL,
    url: `/goldfarb/ClientState?cardcode=${cardcode}`,
    method: 'get',
});

const clientRecipe = (docNum: string): AxiosRequestConfig => ({
    baseURL,
    url: `/goldfarb/clientRecipe?docNum=${docNum}`,
    method: 'get',
});

const invoice = (docNum: string, cardcode: string): AxiosRequestConfig => ({
    baseURL,
    url: `/goldfarb/Invoice?docNum=${docNum}&cardcode=${cardcode}`,
    method: 'get',
});

const invoiceReturn = (docNum: string, cardcode: string): AxiosRequestConfig => ({
    baseURL,
    url: `/goldfarb/InvoiceReturn?docNum=${docNum}&cardcode=${cardcode}`,
    method: 'get',
});

const exchangeRate = (): AxiosRequestConfig => ({
    baseURL,
    url: '/Configuration/ExchangeRate',
    method: 'GET',
});

const minTransportCharge = (): AxiosRequestConfig => ({
    baseURL,
    url: '/Configuration/ChargeTransportMinAmount',
    method: 'get',
});

const createOrder = (data: any): AxiosRequestConfig => ({
    baseURL,
    url: '/goldfarb/CreateOrder',
    method: 'post',
    data,
});

const createCatalog = (): AxiosRequestConfig => ({
    baseURL,
    url: '/goldfarb/CreateCatalog',
    method: 'post',
});

export default {
    latestProducts,
    outlet,
    productLookup,
    productSearch,
    getFamilies,
    clientHeader,
    clientState,
    clientRecipe,
    invoice,
    invoiceReturn,
    exchangeRate,
    minTransportCharge,
    createOrder,
    createCatalog,
};
