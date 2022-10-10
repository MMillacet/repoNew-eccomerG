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
