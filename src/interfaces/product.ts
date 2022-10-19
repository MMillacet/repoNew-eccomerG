/* eslint-disable camelcase */
import { IBrand } from './brand';
import { IFilter } from './filter';
import { IFilterableList, IPaginatedList } from './list';
import { IShopCategory } from './category';
import { IPromoLine } from './promo';

export interface IProductAttributeValue {
    slug: string;
    name: string;
}

export interface IProductAttribute {
    slug: string;
    name: string;
    values: IProductAttributeValue[];
    featured: boolean;
}

export interface IProduct {
    id: number;
    slug: string;
    name: string;
    images: any[];
    documents: string[];
    compareAtPrice: number | null;
    brand: IBrand | null;
    badges: string[];
    categories: IShopCategory[];
    reviews: number;
    rating: number;
    attributes: IProductAttribute[];
    availability: string;
    // goldfarb
    code: string;
    price: number;
    finalPrice: number; // price converted to pesos, useful for price sorting
    discount: number;
    currency: string;
    unitMult: number;
    unitsPerItem: number;
    hasStock: boolean;
    title: string;
    description: string;
    family: string;
    category: string;
    subcategory: string;
    subsubcategory: string;
    hasBought: boolean;
    tax: number;
    relatedItems: string[];
    shops: any[];
    listOrder: string;
    pvp?: number;
    videos: any[];
    videoLinks: any[];
}

export interface IProductPromoSelected {
    quantity: number;
    product: IPromoLine;
}

export type IProductsList = IPaginatedList<IProduct> & IFilterableList<IProduct, IFilter>;
