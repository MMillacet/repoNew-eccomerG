// third-party
// application
import { IProduct } from '../../interfaces/product';
import { CartItemOption } from './cartTypes';
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_UPDATE_QUANTITIES,
    CART_EMPTY,
    CartAddItemAction,
    CartItemQuantity,
    CartRemoveItemAction,
    CartThunkAction,
    CartEmptyAction,
    CartUpdateQuantitiesAction,
    CartAddItemsAction,
    CART_ADD_ITEMS,
} from './cartActionTypes';

export function cartAddItemSuccess(product: IProduct, options: CartItemOption[] = [], quantity = product.unitMult): CartAddItemAction {
    return {
        type: CART_ADD_ITEM,
        product,
        options,
        quantity,
    };
}

export function cartAddItemsSuccess(products: IProduct[], options: CartItemOption[] = [], quantities: number[]): CartAddItemsAction {
    return {
        type: CART_ADD_ITEMS,
        products,
        options,
        quantities,
    };
}

export function cartRemoveItemSuccess(itemId: number): CartRemoveItemAction {
    return {
        type: CART_REMOVE_ITEM,

        itemId,
    };
}

export function cartUpdateQuantitiesSuccess(quantities: CartItemQuantity[]): CartUpdateQuantitiesAction {
    return {
        type: CART_UPDATE_QUANTITIES,
        quantities,
    };
}

export function cartEmptySuccess(): CartEmptyAction {
    return {
        type: CART_EMPTY,
    };
}

export function cartAddItem(
    product: IProduct,
    options: CartItemOption[] = [],
    quantity = product.unitMult,
): CartThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) =>
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(cartAddItemSuccess(product, options, quantity));
                resolve();
            }, 100);
        });
}

export function cartAddItems(products: IProduct[], options: CartItemOption[] = [], quantities: number[]): CartThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) =>
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(cartAddItemsSuccess(products, options, quantities));
                resolve();
            }, 100);
        });
}

export function cartRemoveItem(itemId: number): CartThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) =>
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(cartRemoveItemSuccess(itemId));
                resolve();
            }, 100);
        });
}

export function cartUpdateQuantities(quantities: CartItemQuantity[]): CartThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) =>
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(cartUpdateQuantitiesSuccess(quantities));
                resolve();
            }, 100);
        });
}

export function cartEmpty(): CartThunkAction<Promise<void>> {
    // sending request to server, timeout is used as a stub
    return (dispatch) =>
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(cartEmptySuccess());
                resolve();
            }, 100);
        });
}
