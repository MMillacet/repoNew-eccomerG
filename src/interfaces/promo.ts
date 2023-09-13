/* eslint-disable camelcase */

export interface IPromoLine {
    itemCode: string;
    itemName: string;
    currency: string;
    price: number;
    discPrcnt: number;
    u_Porcentaje: number;
    factorQty: number;
    finalDiscount: number;
    salPackUn: number;
}
export interface IPromo {
    docEntry: number;
    u_Descrip: string;
    u_Fecha_D: Date;
    u_Fecha_H: Date;
    u_Tipo: string;
    u_Cantidad: number;
    u_Descuento: number;
    u_Moneda: string;
    u_DesAdic?: string;
    u_Banner: string;
    lines: IPromoLine[];
}

export interface IPromWebLine {
    itemCode: string;
    itemName: string;
    currency: string;
    price: number;
    discPrcnt: number;
    u_Porcentaje: number;
    factorQty: number;
    finalDiscount: number;
    salPackUn: number;
    obligatorio?: boolean;
    obsequio?: boolean;
    quantity: number;
}

export interface IPromoWeb {
    idPromo: number;
    description?: string;
    lines: IPromWebLine[];
}

export interface IProductPromoSelected {
    quantity: number;
    product: IPromoLine;
}
