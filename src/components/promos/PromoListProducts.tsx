import { Fragment } from 'react';
import { IProductPromoSelected } from '../../interfaces/product';
import CurrencyFormat from '../shared/CurrencyFormat';
import ProductPromoCard from '../shared/ProductPromoCard';

export interface IPromoProducts {
    promoContainer: any;
}

export default function PromoListProducts({ promoContainer }: IPromoProducts) {
    const {
        error,
        handleAddItem,
        handleCheckPromo,
        totalOldPriceUYU,
        totalNewPriceUYU,
        totalOldPriceUSD,
        totalNewPriceUSD,
        totalQuantity,
        totalItemQuantity,
        productsSelected,
    } = promoContainer;
    return (
        <Fragment>
            {productsSelected[0] && productsSelected[0].product && (
                <div>
                    <div className="products-list__body row promo-product-row">
                        {productsSelected.map((item: IProductPromoSelected, index: number) => (
                            <div key={index} className="products-list__item col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2">
                                <ProductPromoCard productQuantity={item.quantity} product={item.product} handleAddItem={handleAddItem} />
                            </div>
                        ))}
                    </div>
                    <Fragment>
                        <div className="products-list__item col-12 ">
                            <div className={'product-card product-card--layout--list'}>
                                <div className="display-grid promo-products__price-row product-card__actions row promo-checkout-total-quantity">
                                    <div className="d-flex">
                                        <div className="product-card__name promo-checkout-quantity-text">
                                            Cantidad de productos seleccionados :{' '}
                                        </div>
                                        <div> {totalItemQuantity}</div>
                                    </div>
                                    <div className="d-flex justify-center">
                                        <div className="product-card__name promo-checkout-quantity-text">
                                            Cantidad de unidades pedidas:{' '}
                                        </div>
                                        <div> {totalQuantity}</div>
                                    </div>
                                </div>
                                <div className="d-grid promo-products__price-row product-card__actions  promo-checkout-total-price">
                                    <div className="total-buy">
                                        <div className="product-card__name promo-checkout-quantity-text">Compra Total </div>
                                    </div>

                                    <div className="d-flex">
                                        <div className="promo-checkout-price-row">
                                            {/* <div className="product-card__name promo-checkout-quantity-text">UYU: </div> */}
                                            <div className="product-card__prices row">
                                                <div className="col-12 d-flex">
                                                    <CurrencyFormat value={totalNewPriceUYU} currency={'$'} />
                                                    {/* <div className="product-card__grey-text">con </div>
                                                <div 
                                                    className="product-card__discount">{productsSelected[0].product.u_Porcentaje}% 
                                                </div> */}
                                                </div>
                                                <span className="col-12 product-card__old-price promo-products__price-old">
                                                    <CurrencyFormat
                                                        value={totalOldPriceUYU}
                                                        currency={productsSelected[0].product.currency}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="promo-checkout-price-row">
                                            {/* <div className="product-card__name promo-checkout-quantity-text">USD: </div> */}
                                            <div className="product-card__prices row">
                                                <div className="col-12 d-flex">
                                                    <CurrencyFormat value={totalNewPriceUSD} currency={'U$D'} />
                                                    {/* <div className="product-card__grey-text">con </div>
                                                <div 
                                                    className="product-card__discount">{productsSelected[0].product.u_Porcentaje}% 
                                                </div> */}
                                                </div>
                                                <span className="col-12 product-card__old-price promo-products__price-old">
                                                    <CurrencyFormat
                                                        value={totalOldPriceUSD}
                                                        currency={productsSelected[0].product.currency}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                    <div className="product-promo-btn-sg">
                        <button onClick={handleCheckPromo} className="btn btn-primary btn-lg">
                            Verifica tu selección
                        </button>
                    </div>
                    <div className="condition-error"> {error}</div>
                </div>
            )}
        </Fragment>
    );
}
