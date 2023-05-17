// application
import { cartAddItem, cartAddItems, cartEmpty, cartRemoveItem, cartUpdateQuantities } from './cartActions';
import { useAppAction, useAppSelector } from '../hooks';

export const useCart = () => useAppSelector((state) => state.cart);

export const useCartAddItem = () => useAppAction(cartAddItem);

export const useCartAddItems = () => useAppAction(cartAddItems);

export const useCartRemoveItem = () => useAppAction(cartRemoveItem);

export const useCartUpdateQuantities = () => useAppAction(cartUpdateQuantities);

export const useCartEmpty = () => useAppAction(cartEmpty);
