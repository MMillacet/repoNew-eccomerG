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
    orderId: string;
    cardcode: string;
    cardCode: string;
    cardname: string;
    cardName: string;
    comments: string;
    compraID: string;
    discount: number;
    docDate: string;
    tipoMov: string;
    tipoPed: GoldfarbOrderType;
    transpCode: string;
    remito: boolean;
    shipToCode: string;
    status: string;
    addressExtention: {
        city: string;
        state: string;
        street: string;
    };
    totalPesos: number;
    totalDolares: number;
    taxPesos: number;
    taxDolares: number;
    docTotalPesos:number;
    docTotalDolares:number;
}

export interface IGoldfarbOrderItem {
    lineNum: number;
    itemcode: string;
    itemCode: string;
    description: string;
    quantity: string;
    currency: string;
    price: number;
    discount: number;
    total: number;
}

export interface IGoldfarbOrder {
    header: IGoldfarbOrderHeader;
    lines: IGoldfarbOrderItem[];
    envios:any[];
}
