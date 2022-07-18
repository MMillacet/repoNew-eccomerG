import { IProduct } from '../../interfaces/product';
import { CartItem, CartItemOption, CartState, CartTotal } from './cartTypes';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_QUANTITIES, CART_EMPTY, CartAction, CartItemQuantity } from './cartActionTypes';
import { withClientState } from '../client';

const currencies = ['$', 'U$D'];

function findItemIndex(items: CartItem[], product: IProduct, options: CartItemOption[]): number {
    return items.findIndex((item) => {
        if (item.product.id !== product.id || item.options.length !== options.length) {
            return false;
        }

        for (let i = 0; i < options.length; i += 1) {
            const option = options[i];
            const itemOption = item.options.find(
                (itemOption) => itemOption.optionId === option.optionId && itemOption.valueId === option.valueId,
            );

            if (!itemOption) {
                return false;
            }
        }

        return true;
    });
}

function calcPriceWithDiscount(product: IProduct): number {
    return product.discount ? product.price * (1 - product.discount / 100) : product.price;
}

function calcSubtotal(items: CartItem[], currency: string = '$'): number {
    return items.reduce((subtotal, item) => (item.product.currency === currency ? subtotal + item.total : subtotal), 0);
}

function calcTax(items: CartItem[], currency: string = '$'): number {
    return items.reduce(
        (subtotal, item) => (item.product.currency === currency ? subtotal + (item.total * item.product.tax) / 100 : subtotal),
        0,
    );
}

function calcQuantity(items: CartItem[]): number {
    return items.reduce((quantity, item) => quantity + item.quantity, 0);
}

function calcTotal(subtotal: number, totals: CartTotal[]): number {
    return totals.reduce((acc, extraLine) => acc + extraLine.price, subtotal);
}

function calcTotals(items: CartItem[], currency: string = '$'): CartTotal[] {
    if (items.length === 0) {
        return [];
    }

    return [
        {
            type: 'tax',
            title: 'Impuestos',
            price: calcTax(items, currency),
        },
    ];

    // if (currency !== '$') {
    //     return [
    //         {
    //             type: 'tax',
    //             title: 'Impuestos',
    //             price: calcTax(items) * 0.2,
    //         },
    //     ];
    // }

    // return [
    //     // {
    //     //     type: 'shipping',
    //     //     title: 'Envio',
    //     //     price: 0,
    //     // },
    //     {
    //         type: 'tax',
    //         title: 'Impuestos',
    //         price: calcSubtotal(items, currency) * 0.2,
    //     },
    // ];
}

function calcAllTotals(items: CartItem[]) {
    const subtotal = currencies.reduce((acc: { [currency: string]: number }, currency: string) => {
        acc[currency] = calcSubtotal(items, currency);
        return acc;
    }, {});

    const totals = currencies.reduce((acc: { [currency: string]: CartTotal[] }, currency: string) => {
        acc[currency] = calcTotals(items, currency);
        return acc;
    }, {});

    const total = currencies.reduce((acc: { [currency: string]: number }, currency: string) => {
        acc[currency] = calcTotal(subtotal[currency], totals[currency]);
        return acc;
    }, {});

    return {
        subtotal,
        totals,
        total,
    };
}

function addItem(state: CartState, product: IProduct, options: CartItemOption[], quantity: number) {
    const itemIndex = findItemIndex(state.items, product, options);

    let newItems: CartItem[];
    let { lastItemId } = state;

    if (itemIndex === -1) {
        lastItemId += 1;
        newItems = [
            ...state.items,
            {
                id: lastItemId,
                product: JSON.parse(JSON.stringify(product)),
                options: JSON.parse(JSON.stringify(options)),
                price: product.price,
                total: calcPriceWithDiscount(product) * quantity,
                quantity,
            },
        ];
    } else {
        const item = state.items[itemIndex];

        newItems = [
            ...state.items.slice(0, itemIndex),
            {
                ...item,
                quantity: item.quantity + quantity,
                total: (item.quantity + quantity) * calcPriceWithDiscount(product),
            },
            ...state.items.slice(itemIndex + 1),
        ];
    }

    const allTotals = calcAllTotals(newItems);

    return {
        ...state,
        lastItemId,
        items: newItems,
        quantity: calcQuantity(newItems),
        ...allTotals,
    };
}

function removeItem(state: CartState, itemId: number) {
    const { items } = state;
    const newItems = items.filter((item) => item.id !== itemId);

    const allTotals = calcAllTotals(newItems);

    return {
        ...state,
        items: newItems,
        quantity: calcQuantity(newItems),
        ...allTotals,
    };
}

function updateQuantities(state: CartState, quantities: CartItemQuantity[]) {
    let needUpdate = false;

    const newItems = state.items.map((item) => {
        const quantity = quantities.find((x) => x.itemId === item.id && x.value !== item.quantity);

        if (!quantity) {
            return item;
        }

        needUpdate = true;

        return {
            ...item,
            quantity: quantity.value,
            total: quantity.value * calcPriceWithDiscount(item.product),
        };
    });

    if (needUpdate) {
        const allTotals = calcAllTotals(newItems);

        return {
            ...state,
            items: newItems,
            quantity: calcQuantity(newItems),
            ...allTotals,
        };
    }

    return state;
}

const initialState: CartState = {
    lastItemId: 0,
    quantity: 0,
    items: [],
    subtotal: {
        $: 0,
        U$D: 0,
    },
    totals: {
        $: [],
        U$D: [],
    },
    total: {
        $: 0,
        U$D: 0,
    },
};

export const CART_NAMESPACE = 'cart';

function cartBaseReducer(state = initialState, action: CartAction): CartState {
    switch (action.type) {
        case CART_ADD_ITEM:
            return addItem(state, action.product, action.options, action.quantity);

        case CART_REMOVE_ITEM:
            return removeItem(state, action.itemId);

        case CART_UPDATE_QUANTITIES:
            return updateQuantities(state, action.quantities);
        case CART_EMPTY:
            return initialState;

        default:
            return state;
    }
}

const cartReducer = withClientState(cartBaseReducer, CART_NAMESPACE);

export default cartReducer;
