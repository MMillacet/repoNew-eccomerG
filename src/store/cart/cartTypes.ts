import { IProduct } from '../../interfaces/product';

export interface CartItemOption {
    optionId: number;
    optionTitle: string;
    valueId: number;
    valueTitle: string;
}

export interface CartItem {
    id: number;
    product: IProduct;
    options: CartItemOption[];
    price: number;
    quantity: number;
    total: number;
}

export interface CartItemSave {
    itemCode: number;
    quantity: number;
}

export type CartTotalType = 'shipping' | 'tax';

export interface CartTotal {
    type: CartTotalType;
    title: string;
    price: number;
}

export interface Cart {
    items: CartItem[];
    quantity: number;
    subtotal: { [currency: string]: number };
    totals: { [currency: string]: CartTotal[] };
    total: { [currency: string]: number };
}

export interface CartState extends Cart {
    lastItemId: number;
}
