// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import CurrencyFormat from '../shared/CurrencyFormat';
import ProductsPromoCardList from '../shared/ProductsPromoCardList';

export interface IPromoCheckout {
    productsSelected: any;
    setView: any;
}
export default function PromoCheckout({ productsSelected, setView }: IPromoCheckout) {
    const [totalNewPrice, setTotalNewPrice] = useState<number>(0);
    const [totalOldPrice, setTotalOldPrice] = useState<number>(0);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);

    useEffect(() => {
        setTotalNewPrice(0);
        setTotalOldPrice(0);
        setTotalQuantity(0);
        productsSelected.forEach((item: any) => {
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

    const handleGoBack = () => {
        setView('view1');
    };

    const handleFinalize = () => {
        setView('view1');
    };

    return (
        <React.Fragment>
            <div className="products-list__body row promo-product-row">
                {productsSelected.map((item: any, index: number) => (
                    <React.Fragment key={index}>
                        {item.quantity > 0 && (
                            <div key={index} className="products-list__item col-12 ">
                                <ProductsPromoCardList item={item} />
                            </div>
                        )}
                    </React.Fragment>
                ))}
                <React.Fragment>
                    <div className="products-list__item col-12 ">
                        <div className={'product-card product-card--layout--list'}>
                            <div className="promo-products__price-row product-card__actions promo-checkout-total-price">
                                <div className="promo-checkout-price-row">
                                    <div className="product-card__name promo-checkout-quantity-text">Total Price: </div>
                                    <div className="product-card__prices row">
                                        <div className="col-12 d-flex">
                                            <CurrencyFormat value={totalNewPrice} currency={productsSelected[0].product.currency} />
                                            <div className="product-card__grey-text">with </div>
                                            <div className="product-card__discount">{productsSelected[0].product.u_Porcentaje}% </div>
                                        </div>
                                        <span className="col-12 product-card__old-price promo-products__price-old">
                                            <CurrencyFormat value={totalOldPrice} currency={productsSelected[0].product.currency} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="promo-products__price-row product-card__actions row promo-checkout-total-quantity">
                                <div className="product-card__name promo-checkout-quantity-text">Total Quantity: </div>
                                <div> {totalQuantity}</div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
            <div className="promo-checkout-btns">
                <div className="product-promo-btn-sg">
                    <button onClick={handleGoBack} className="btn btn-primary btn-lg">
                        {' '}
                        Volver
                    </button>
                </div>
                <div className="product-promo-btn-sg">
                    <button onClick={handleFinalize} className="btn btn-primary btn-lg">
                        {' '}
                        Finalizar
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}
