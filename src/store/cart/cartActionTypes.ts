import { IProduct } from '../../interfaces/product';
import { CartItemOption } from './cartTypes';
import { AppAction } from '../types';

export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_UPDATE_QUANTITIES = 'CART_UPDATE_QUANTITIES';
export const CART_EMPTY = 'CART_EMPTY';
export const CART_ADD_ITEMS = 'CART_ADD_ITEMS';

export interface CartItemQuantity {
    itemId: number;
    value: number;
}

export interface CartAddItemAction {
    type: typeof CART_ADD_ITEM;
    product: IProduct;
    options: CartItemOption[];
    quantity: number;
}

export interface CartAddItemsAction {
    type: typeof CART_ADD_ITEMS;
    products: IProduct[];
    options: CartItemOption[];
    quantities: number[];
}

export interface CartRemoveItemAction {
    type: typeof CART_REMOVE_ITEM;
    itemId: number;
}

export interface CartUpdateQuantitiesAction {
    type: typeof CART_UPDATE_QUANTITIES;
    quantities: CartItemQuantity[];
}

export interface CartEmptyAction {
    type: typeof CART_EMPTY;
}

export type CartAction = CartAddItemAction | CartRemoveItemAction | CartUpdateQuantitiesAction | CartEmptyAction | CartAddItemsAction;

export type CartThunkAction<T = void> = AppAction<CartAction, T>;
