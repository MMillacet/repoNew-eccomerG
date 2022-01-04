import { IAddress } from './address';

export interface IOrderItemOption {
    label: string;
    value: string;
}

export interface IOrderItem {
    id: number;
    slug: string;
    name: string;
    image: string;
    options?: IOrderItemOption[];
    price: number;
    quantity: number;
    total: number;
}

export interface IOrderAdditionalLine {
    label: string;
    total: number;
}

export interface IOrder {
    id: number;
    date: string;
    status: string;
    items: IOrderItem[];
    additionalLines: IOrderAdditionalLine[];
    quantity: number;
    subtotal: number;
    total: number;
    paymentMethod: string;
    shippingAddress: IAddress;
    billingAddress: IAddress;
}

export interface IOrderSummary {
    id: number;
    date: string;
    status: string;
    quantity: number;
    total: number;
}

export type GoldfarbOrderType = 'N' | 'E' | 'R';

export interface IGoldfarbOrderHeader {
    cardcode: string;
    cardname: string;
    remito: boolean;
    tipoMov: string;
    tipoPed: GoldfarbOrderType;
    discount: number;
    shipToCode: string;
}

export interface IGoldfarbOrderItem {
    itemcode: string;
    description: string;
    quantity: number;
    currency: string;
    price: number;
    discount: number;
    total: number;
}

export interface IGoldfarbOrder {
    header: IGoldfarbOrderHeader;
    lines: IGoldfarbOrderItem[];
}
