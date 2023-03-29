import { toast } from 'react-toastify';
import { IProduct } from '../../interfaces/product';
import { CartItemQuantity } from '../../store/cart/cartActionTypes';
import { Cart, CartItem } from '../../store/cart/cartTypes';
import goldfarbApi from '../goldfarb';

function findItemIndex(items: CartItem[], product: IProduct): number {
    return items.findIndex((item) => {
        if (item.product.id !== product.id) {
            return false;
        }
        return true;
    });
}

export async function saveItem(cart: Cart, product: IProduct, quantity: number, user: any) {
    try {
        const itemsToSave = cart.items.map((item) => ({ itemCode: item.product.id, quantity: item.quantity }));
        const itemIndex = findItemIndex(cart.items, product);

        if (itemIndex === -1) {
            itemsToSave.push({ itemCode: product.id, quantity });
        } else {
            const item = itemsToSave[itemIndex];
            item.quantity += quantity;
            itemsToSave[itemIndex] = item;
        }

        await goldfarbApi.saveCart(itemsToSave, String(user?.cardcode), String(user?.email));
        toast.success(`Producto "${product.title}" agregado al carro!`, { theme: 'colored' });
        return true;
    } catch {
        toast.error(`Error agregando "${product.title}"  al carro!`, { theme: 'colored' });
        return false;
    }
}

export async function saveItems(cart: Cart, products: IProduct[], quantities: number[], user: any) {
    try {
        const itemsToSave = cart.items.map((item) => ({ itemCode: item.product.id, quantity: item.quantity }));

        products.forEach((product, index) => {
            const itemIndex = findItemIndex(cart.items, product);

            if (itemIndex === -1) {
                itemsToSave.push({ itemCode: product.id, quantity: quantities[index] });
            } else {
                const item = itemsToSave[itemIndex];
                item.quantity += quantities[index];
                itemsToSave[itemIndex] = item;
            }
        });

        console.log({ itemsToSave });

        await goldfarbApi.saveCart(itemsToSave, String(user?.cardcode), String(user?.email));
        toast.success(`Productos  agregados al carro!`, { theme: 'colored' });
        return true;
    } catch {
        toast.error(`Error agregando los productos  al carro!`, { theme: 'colored' });
        return false;
    }
}

export async function saveRemoveItem(cart: Cart, product: IProduct, user: any) {
    try {
        const itemsToSave = cart.items.map((item) => ({ itemCode: item.product.id, quantity: item.quantity }));
        const itemIndex = findItemIndex(cart.items, product);

        if (itemIndex !== -1) {
            itemsToSave.splice(itemIndex);
            await goldfarbApi.saveCart(itemsToSave, String(user?.cardcode), String(user?.email));
            toast.success(`Producto "${product.title}" removido del carro!`, { theme: 'colored' });
            return true;
        }
        return false;
    } catch {
        toast.error(`Error removiendo "${product.title}"  al carro!`, { theme: 'colored' });
        return false;
    }
}

export async function saveUpdateItem(cart: Cart, quantities: CartItemQuantity[], user: any) {
    try {
        const newItems = cart.items.map((item) => {
            const quantity = quantities.find((x) => x.itemId === item.id && x.value !== item.quantity);

            if (!quantity) {
                return { itemCode: item.product.id, quantity: item.quantity };
            }

            return { itemCode: item.product.id, quantity: quantity.value };
        });
        await goldfarbApi.saveCart(newItems, String(user?.cardcode), String(user?.email));
        return true;
    } catch {
        toast.error(`Error cambiando las cantidades!`, { theme: 'colored' });
        return false;
    }
}
