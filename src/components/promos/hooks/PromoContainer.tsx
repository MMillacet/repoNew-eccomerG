import { useEffect, useState } from 'react';
import { IProductPromoSelected } from '../../../interfaces/product';
import { IPromo, IPromoLine } from '../../../interfaces/promo';

const PromoContainer = (promoFetch: IPromo) => {
    const [promo, setPromo] = useState<IPromo>(promoFetch);
    const [view, setView] = useState<string>('view1');
    const [productsSelected, setProductsSelected] = useState<IProductPromoSelected[]>([]);
    const [error, setError] = useState<string>('');
    const [totalNewPrice, setTotalNewPrice] = useState<number>(0);
    const [totalOldPrice, setTotalOldPrice] = useState<number>(0);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const products = promoFetch.lines;

    useEffect(() => {
        setPromo(promo);
    }, [promoFetch]);

    useEffect(() => {
        const newProductsSelecetd: IProductPromoSelected[] = [];
        const generatedProducts = async () => {
            await products.forEach((product: IPromoLine) => {
                const newItem = {
                    product,
                    quantity: 0,
                };
                newProductsSelecetd.push(newItem);
            });
            setProductsSelected(newProductsSelecetd);
        };
        generatedProducts();
    }, [products]);

    useEffect(() => {
        setTotalNewPrice(0);
        setTotalOldPrice(0);
        setTotalQuantity(0);
        productsSelected.forEach((item: IProductPromoSelected) => {
            if (item.quantity > 0) {
                setTotalNewPrice(
                    (prevState) =>
                        prevState + (item.product.price - item.product.price * (item.product.u_Porcentaje / 100)) * item.quantity,
                );
                setTotalOldPrice((prevState) => prevState + item.product.price * item.quantity);
                setTotalQuantity((prevState) => prevState + item.quantity);
            }
        });
    }, [productsSelected]);

    const handleAddItem = ({ product, quantity }: IProductPromoSelected) => {
        const newProductsSelected = productsSelected.map((item: IProductPromoSelected) => {
            if (item.product.itemCode === product.itemCode) {
                return { product: item.product, quantity };
            }

            return item;
        });
        setProductsSelected(newProductsSelected);
    };

    const handleCheckPromo = () => {
        console.log('sadasd');
        if (promo.u_Tipo === 'MO') {
            let totalPrice: number = 0;
            productsSelected.forEach((item: IProductPromoSelected) => {
                if (item.quantity > 0) {
                    totalPrice += item.product.price * item.quantity;
                }
            });
            if (totalPrice > promo.u_Cantidad) {
                console.log('es acaacas');
                setView('view2');
            } else {
                setError('Condición de promoción no alcanzada');
            }
        } else if (promo.u_Tipo === 'CA') {
            let productsQuantity: number = 0;
            productsSelected.forEach((item: IProductPromoSelected) => {
                productsQuantity += item.quantity;
            });
            if (productsQuantity > promo.u_Cantidad) {
                setView('view2');
            } else {
                setError('Condición de promoción no alcanzada');
            }
        } else if (promo.u_Tipo === 'CM') {
            let productsQuantity: number = 0;
            productsSelected.forEach((item: IProductPromoSelected) => {
                productsQuantity += item.quantity;
            });
            if (productsQuantity > promo.u_Cantidad) {
                setView('view2');
            } else {
                setError('Condición de promoción no alcanzada');
            }
        } else if (promo.u_Tipo === 'CP') {
            let productsQuantity: number = 0;
            productsSelected.forEach((item: IProductPromoSelected) => {
                productsQuantity += item.quantity;
            });
            if (productsQuantity > promo.u_Cantidad) {
                setView('view2');
            } else {
                setError('Condición de promoción no alcanzada');
            }
        }
    };

    return {
        view,
        setView,
        productsSelected,
        setProductsSelected,
        handleAddItem,
        error,
        handleCheckPromo,
        totalNewPrice,
        totalOldPrice,
        totalQuantity,
    };
};

export default PromoContainer;
