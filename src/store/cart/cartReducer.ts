import { IProduct } from '../../interfaces/product';
import { IProductPromoSelected } from '../../interfaces/promo';
import { CartItem, CartItemOption, CartState, CartTotal } from './cartTypes';
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_UPDATE_QUANTITIES,
    CART_EMPTY,
    CartAction,
    CartItemQuantity,
    CART_ADD_ITEMS,
    CART_ADD_PROMO,
    CART_REMOVE_PROMO,
} from './cartActionTypes';
import { withClientState } from '../client';

const currencies = ['$', 'U$'];

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

function getTaxes(product: IProduct): number {
    return product.tax ?? 22;
}

function calcTax(items: CartItem[], currency: string = '$'): number {
    return items.reduce(
        (subtotal, item) => (item.product.currency === currency ? subtotal + (item.total * getTaxes(item.product)) / 100 : subtotal),
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
    const { cartWeb } = state;
    let { lastItemId } = cartWeb;
    const itemIndex = findItemIndex(cartWeb.items, product, options);

    let newItems: CartItem[];

    if (itemIndex === -1) {
        lastItemId += 1;
        newItems = [
            ...cartWeb.items,
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
        const item = cartWeb.items[itemIndex];

        newItems = [
            ...cartWeb.items.slice(0, itemIndex),
            {
                ...item,
                quantity: item.quantity + quantity,
                total: (item.quantity + quantity) * calcPriceWithDiscount(product),
            },
            ...cartWeb.items.slice(itemIndex + 1),
        ];
    }

    const allTotals = calcAllTotals(newItems);

    return {
        ...state,
        cartWeb: {
            ...state.cartWeb,
            lastItemId,
            items: newItems,
            quantity: calcQuantity(newItems),
            ...allTotals,
        },
    };
}

function addItems(state: CartState, products: IProduct[], options: CartItemOption[], quantities: number[]) {
    const { cartWeb } = state;
    let newItems: CartItem[] = [...cartWeb.items];
    let { lastItemId } = cartWeb;

    products.forEach((product, index) => {
        const itemIndex = findItemIndex(cartWeb.items, product, options);

        if (itemIndex === -1) {
            lastItemId += 1;
            newItems.push({
                id: lastItemId,
                product: JSON.parse(JSON.stringify(product)),
                options: JSON.parse(JSON.stringify(options)),
                price: product.price,
                total: calcPriceWithDiscount(product) * quantities[index],
                quantity: quantities[index],
            });
        } else {
            const item = cartWeb.items[itemIndex];

            newItems = [
                ...cartWeb.items.slice(0, itemIndex),
                {
                    ...item,
                    quantity: item.quantity + quantities[index],
                    total: (item.quantity + quantities[index]) * calcPriceWithDiscount(product),
                },
                ...cartWeb.items.slice(itemIndex + 1),
            ];
        }
    });

    const allTotals = calcAllTotals(newItems);

    return {
        ...state,
        cartWeb: {
            ...state.cartWeb,
            lastItemId,
            items: newItems,
            quantity: calcQuantity(newItems),
            ...allTotals,
        },
    };
}

function removeItem(state: CartState, itemId: number) {
    const { cartWeb } = state;
    const newItems = cartWeb.items.filter((item) => item.id !== itemId);

    const allTotals = calcAllTotals(newItems);

    return {
        ...state,
        cartWeb: {
            ...state.cartWeb,
            items: newItems,
            quantity: calcQuantity(newItems),
            ...allTotals,
        },
    };
}

function updateQuantities(state: CartState, quantities: CartItemQuantity[]) {
    let needUpdate = false;

    const newItems = state.cartWeb.items.map((item) => {
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
            cartWeb: {
                ...state.cartWeb,
                items: newItems,
                quantity: calcQuantity(newItems),
                ...allTotals,
            },
        };
    }

    return state;
}

const getPriceItem = (item: IProductPromoSelected) => {
    let price = (item.product.price - item.product.price * (item.product.finalDiscount / 100)) * item.quantity;
    if (item.product.factorQty) {
        price *= item.product.factorQty;
    }
    return price;
};

function addPromo(state: CartState, promoItems: IProductPromoSelected[], idPromo: string, description: string) {
    const { cartPromo } = state;
    const newItems: CartItem[] = [];

    promoItems.forEach((items, index) =>
        newItems.push({
            id: index,
            product: JSON.parse(JSON.stringify(items.product)),
            price: items.product.price,
            total: getPriceItem(items),
            quantity: items.quantity,
            options: [],
        }),
    );

    let allItemsPromos: any[] = newItems;
    cartPromo.promos.forEach((promos) => {
        allItemsPromos = [...allItemsPromos, promos.lines];
    });

    const allTotals = calcAllTotals(allItemsPromos);

    return {
        ...state,
        cartPromo: { ...allTotals, promos: [...cartPromo.promos, { lines: newItems, idPromo, description }] },
    };
}

function removePromo(state: CartState, idPromo: string) {
    const { cartPromo } = state;
    const newPromos = cartPromo.promos.filter((promo) => promo.idPromo !== idPromo);

    let allItemsPromos: any[] = [];

    newPromos.forEach((promos) => {
        allItemsPromos = [...allItemsPromos, promos.lines];
    });

    const allTotals = calcAllTotals(allItemsPromos);

    return {
        ...state,
        cartPromo: { ...allTotals, promos: newPromos },
    };
}

const initialState: CartState = {
    cartWeb: {
        lastItemId: 0,
        quantity: 0,
        items: [],
        subtotal: {
            $: 0,
            U$: 0,
        },
        totals: {
            $: [],
            U$: [],
        },
        total: {
            $: 0,
            U$: 0,
        },
    },
    cartPromo: {
        promos: [],
        subtotal: {
            $: 0,
            U$: 0,
        },
        totals: {
            $: [],
            U$: [],
        },
        total: {
            $: 0,
            U$: 0,
        },
    },
};

export const CART_NAMESPACE = 'cart';

function cartBaseReducer(state = initialState, action: CartAction): CartState {
    switch (action.type) {
        case CART_ADD_ITEM:
            return addItem(state, action.product, action.options, action.quantity);

        case CART_ADD_ITEMS:
            return addItems(state, action.products, action.options, action.quantities);

        case CART_REMOVE_ITEM:
            return removeItem(state, action.itemId);

        case CART_UPDATE_QUANTITIES:
            return updateQuantities(state, action.quantities);

        case CART_EMPTY:
            return initialState;

        case CART_ADD_PROMO:
            return addPromo(state, action.promoItems, action.idPromo, action.description);

        case CART_REMOVE_PROMO:
            return removePromo(state, action.idPromo);

        default:
            return state;
    }
}

const cartReducer = withClientState(cartBaseReducer, CART_NAMESPACE);

export default cartReducer;
