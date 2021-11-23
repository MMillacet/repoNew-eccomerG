import { IBrand } from './brand';
import { IFilter } from './filter';
import { IFilterableList, IPaginatedList } from './list';
import { IShopCategory } from './category';

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
    images: string[];
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
    discount: number;
    currency: string;
    unitMult: string;
    unitsPerItem: string;
    hasStock: boolean;
    title: string;
    description: string;
    family: string;
    category: string;
    subcategory: string;
    hasBought: boolean;
    tax: number;
}

export type IProductsList = IPaginatedList<IProduct> & IFilterableList<IProduct, IFilter>;
