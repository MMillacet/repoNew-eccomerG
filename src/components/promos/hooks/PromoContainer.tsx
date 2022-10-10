import { useEffect, useState } from 'react';
import { IProductPromoSelected } from '../../../interfaces/product';
import { IPromo, IPromoLine } from '../../../interfaces/promo';

const PromoContainer = (promoFetch: IPromo) => {
    const [promo, setPromo] = useState<IPromo>(promoFetch);
    const [view, setView] = useState<string>('view1');
    const [productsSelected, setProductsSelected] = useState<IProductPromoSelected[]>([]);
    const [error, setError] = useState<string>('');
    const [totalNewPriceUYU, setTotalNewPriceUYU] = useState<number>(0);
    const [totalNewPriceUSD, setTotalNewPriceUSD] = useState<number>(0);
    const [totalOldPriceUYU, setTotalOldPriceUYU] = useState<number>(0);
    const [totalOldPriceUSD, setTotalOldPriceUSD] = useState<number>(0);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const [totalItemQuantity, setTotalItemQuantity] = useState<number>(0);
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
        setTotalNewPriceUYU(0);
        setTotalNewPriceUSD(0);
        setTotalOldPriceUYU(0);
        setTotalOldPriceUSD(0);
        setTotalQuantity(0);
        setTotalItemQuantity(0);
        setError('');
        productsSelected.forEach((item: IProductPromoSelected) => {
            if (item.quantity > 0) {
                if (promo.u_Tipo === 'CM' || promo.u_Tipo === 'CP') {
                    if (item.product.currency === '$') {
                        setTotalNewPriceUYU(
                            (prevState) =>
                                prevState +
                                (item.product.price - item.product.price * (item.product.u_Porcentaje / 100)) *
                                    item.quantity *
                                    item.product.factorQty,
                        );
                        setTotalOldPriceUYU((prevState) => prevState + item.product.price * item.quantity * item.product.factorQty);
                    } else {
                        setTotalNewPriceUSD(
                            (prevState) =>
                                prevState +
                                (item.product.price - item.product.price * (item.product.u_Porcentaje / 100)) *
                                    item.quantity *
                                    item.product.factorQty,
                        );
                        setTotalOldPriceUSD((prevState) => prevState + item.product.price * item.quantity * item.product.factorQty);
                    }
                } else if (item.product.currency === '$') {
                    setTotalNewPriceUYU(
                        (prevState) =>
                            prevState + (item.product.price - item.product.price * (item.product.u_Porcentaje / 100)) * item.quantity,
                    );
                    setTotalOldPriceUYU((prevState) => prevState + item.product.price * item.quantity);
                } else {
                    setTotalNewPriceUSD(
                        (prevState) =>
                            prevState + (item.product.price - item.product.price * (item.product.u_Porcentaje / 100)) * item.quantity,
                    );
                    setTotalOldPriceUSD((prevState) => prevState + item.product.price * item.quantity);
                }
                setTotalQuantity((prevState) => prevState + item.quantity);
                setTotalItemQuantity((prevState) => prevState + 1);
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
        if (promo.u_Tipo === 'MO') {
            let totalPrice: number = 0;
            productsSelected.forEach((item: IProductPromoSelected) => {
                if (item.quantity > 0) {
                    totalPrice += item.product.price * item.quantity;
                }
            });
            if (totalPrice >= promo.u_Cantidad) {
                setView('view2');
            } else {
                setError('Condición de promoción no alcanzada');
            }
        } else if (promo.u_Tipo === 'CA' || promo.u_Tipo === 'CM' || promo.u_Tipo === 'CP') {
            if (totalQuantity >= promo.u_Cantidad) {
                setView('view2');
            } else {
                setError('Condición de promoción no alcanzada');
            }
        } else if (promo.u_Tipo === 'CI') {
            if (totalItemQuantity >= promo.u_Cantidad) {
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
        totalNewPriceUYU,
        totalOldPriceUYU,
        totalOldPriceUSD,
        totalQuantity,
        totalItemQuantity,
        totalNewPriceUSD,
    };
};

export default PromoContainer;
