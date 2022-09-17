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
    const { totalNewPrice, totalOldPrice, totalQuantity, productsSelected, setView } = promoContainer;

    const handleGoBack = () => {
        setView('view1');
    };

    const handleFinalize = () => {
        setView('view3');
    };

    const getPriceItem = (item: IProductPromoSelected) => {
        let price = (item.product.price - item.product.price * (item.product.u_Porcentaje / 100)) * item.quantity;
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
                        {item.product.u_Porcentaje ? `${item.product.u_Porcentaje}%` : ''}
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
                        <div className="promo-products__price-row product-card__actions row promo-checkout-total-quantity">
                            <div className="product-card__name promo-checkout-quantity-text">Cantidad Total: </div>
                            <div> {totalQuantity}</div>
                        </div>
                        <div className="promo-products__price-row product-card__actions promo-checkout-total-price">
                            <div className="promo-checkout-price-row">
                                <div className="product-card__name promo-checkout-quantity-text">Precio Total: </div>
                                <div className="product-card__prices row">
                                    <div className="col-12 d-flex">
                                        <CurrencyFormat value={totalNewPrice} currency={productsSelected[0].product.currency} />
                                        <div className="product-card__grey-text">con </div>
                                        <div className="product-card__discount">{productsSelected[0].product.u_Porcentaje}% </div>
                                    </div>
                                    <span className="col-12 product-card__old-price promo-products__price-old">
                                        <CurrencyFormat value={totalOldPrice} currency={productsSelected[0].product.currency} />
                                    </span>
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
