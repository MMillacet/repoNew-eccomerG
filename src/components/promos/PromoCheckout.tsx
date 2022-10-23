import Head from 'next/head';
import { Fragment } from 'react';
import theme from '../../data/theme';
import { IProductPromoSelected } from '../../interfaces/product';
import AppLink from '../shared/AppLink';
import CurrencyFormat from '../shared/CurrencyFormat';
import PromoHeader from './PromoHeader';

export interface IPromoProducts {
    promoContainer: any;
}

export default function PromoCheckout({ promoContainer }: IPromoProducts) {
    const {
        totalOldPriceUYU,
        totalNewPriceUYU,
        totalOldPriceUSD,
        totalNewPriceUSD,
        totalQuantity,
        totalItemQuantity,
        productsSelected,
        setView,
    } = promoContainer;

    const handleGoBack = () => {
        setView('view1');
    };

    const handleFinalize = () => {
        setView('view3');
    };

    const getPriceItem = (item: IProductPromoSelected) => {
        let price = (item.product.price - item.product.price * (item.product.finalDiscount / 100)) * item.quantity;
        if (item.product.factorQty) {
            price *= item.product.factorQty;
        }
        return price;
    };

    const cartItems = productsSelected.map((item: IProductPromoSelected, index: number) => {
        if (item.quantity > 0) {
            const image = (
                <div className="product-image">
                    <AppLink className="product-image__body">
                        <img
                            className="product-image__img"
                            src={`https://goldfarb.blob.core.windows.net/goldfarb/imagenes/${item.product.itemCode}.jpg`}
                            alt=""
                        />
                    </AppLink>
                </div>
            );

            return (
                <tr key={index} className="cart-table__row">
                    <td className="cart-table__column cart-table__column--code" data-title="Code">
                        {item.product.itemCode}
                    </td>
                    <td className="cart-table__column cart-table__column--image">{image}</td>
                    <td className="cart-table__column cart-table__column--product">
                        <AppLink className="cart-table__product-name">{item.product.itemName}</AppLink>
                    </td>
                    <td className="cart-table__column cart-table__column--price" data-title="Price">
                        <CurrencyFormat value={item.product.price} currency={item.product.currency} />
                    </td>
                    <td className="cart-table__column cart-table__column--quantity" data-title="Quantity">
                        {item.quantity}
                    </td>
                    <td className="cart-table__column cart-table__column--discount" data-title="Discount">
                        {item.product.finalDiscount ? `${item.product.finalDiscount}%` : ''}
                    </td>
                    <td className="cart-table__column cart-table__column--total" data-title="Total">
                        <CurrencyFormat value={getPriceItem(item)} currency={item.product.currency} />
                    </td>
                </tr>
            );
        }
        return null;
    });

    const breadcrumb = [{ title: 'Lista' }, { title: 'Verifica tu seleccion' }];

    const content = (
        <div className="cart block">
            <div className="container">
                <table className="cart__table cart-table">
                    <thead className="cart-table__head">
                        <tr className="cart-table__row">
                            <th className="cart-table__column cart-table__column--code">Codigo</th>
                            <th className="cart-table__column cart-table__column--image">Imagen</th>
                            <th className="cart-table__column cart-table__column--product">Producto</th>
                            <th className="cart-table__column cart-table__column--price">Precio</th>
                            <th className="cart-table__column cart-table__column--quantity">Cantidad</th>
                            <th className="cart-table__column cart-table__column--discount">Descuento</th>
                            <th className="cart-table__column cart-table__column--total">Total</th>
                        </tr>
                    </thead>
                    <tbody className="cart-table__body">{cartItems}</tbody>
                </table>
            </div>
        </div>
    );

    return (
        <Fragment>
            <Head>
                <title>{`Verifica tu seleccion— ${theme.name}`}</title>
            </Head>

            <PromoHeader setView={setView} header="Verifica tu seleccion" breadcrumb={breadcrumb} />

            {content}

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
                                <div className="product-card__name promo-checkout-quantity-text">Cantidad de unidades pedidas: </div>
                                <div> {totalQuantity}</div>
                            </div>
                        </div>
                        <div className="d-grid promo-products__price-row product-card__actions promo-checkout-total-price">
                            <div className="total-buy">
                                <div className="product-card__name promo-checkout-quantity-text">Compra Total </div>
                            </div>

                            <div className="d-flex">
                                <div className="promo-checkout-price-row">
                                    {/* <div className="product-card__name promo-checkout-quantity-text">UYU: </div> */}
                                    <div className="product-card__prices row">
                                        <div className="col-12 d-flex">
                                            <CurrencyFormat value={totalNewPriceUYU} currency={'$'} />
                                        </div>
                                        <span className="col-12 product-card__old-price promo-products__price-old">
                                            <CurrencyFormat value={totalOldPriceUYU} currency={'$'} />
                                        </span>
                                    </div>
                                </div>
                                <div className="promo-checkout-price-row">
                                    {/* <div className="product-card__name promo-checkout-quantity-text">USD: </div> */}
                                    <div className="product-card__prices row">
                                        <div className="col-12 d-flex">
                                            <CurrencyFormat value={totalNewPriceUSD} currency={'U$'} />
                                        </div>
                                        <span className="col-12 product-card__old-price promo-products__price-old">
                                            <CurrencyFormat value={totalOldPriceUSD} currency={'U$'} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
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
        </Fragment>
    );
}
