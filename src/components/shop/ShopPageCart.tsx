// react
import { Fragment, useState } from 'react';

// third-party
import classNames from 'classnames';
import Head from 'next/head';

// application
import AppLink from '../shared/AppLink';
import AsyncAction from '../shared/AsyncAction';
import Cross12Svg from '../../svg/cross-12.svg';
import CurrencyFormat from '../shared/CurrencyFormat';
import InputNumber from '../shared/InputNumber';
import PageHeader from '../shared/PageHeader';
import url from '../../services/url';
import { CartItem } from '../../store/cart/cartTypes';

// data stubs
import theme from '../../data/theme';
import { useCart, useCartRemoveItem, useCartUpdateQuantities } from '../../store/cart/cartHooks';

export interface Quantity {
    itemId: number;
    value: string | number;
}

function ShopPageCart() {
    const [quantities, setQuantities] = useState<Quantity[]>([]);
    const cart = useCart();
    const cartRemoveItem = useCartRemoveItem();
    const cartUpdateQuantities = useCartUpdateQuantities();

    const getItemQuantity = (item: CartItem) => {
        const quantity = quantities.find((x) => x.itemId === item.id);

        return quantity ? quantity.value : item.quantity;
    };

    const handleChangeQuantity = (item: CartItem, quantity: string | number) => {
        setQuantities((prevState) => {
            const index = prevState.findIndex((x) => x.itemId === item.id);

            const quantities =
                index === -1
                    ? [
                          ...prevState,
                          {
                              itemId: item.id,
                              value: quantity,
                              step: item.product.unitMult,
                          },
                      ]
                    : [
                          ...prevState.slice(0, index),
                          {
                              ...prevState[index],
                              value: quantity,
                              step: item.product.unitMult,
                          },
                          ...prevState.slice(index + 1),
                      ];

            cartUpdateQuantities(
                quantities.map((x) => ({
                    ...x,
                    value: typeof x.value === 'string' ? parseFloat(x.value) : x.value,
                })),
            );
            return quantities;
        });
    };

    const breadcrumb = [
        { title: 'Inicio', url: '/' },
        { title: 'Carro de compras', url: '' },
    ];

    let content;

    if (cart.quantity) {
        const cartItems = cart.items.map((item) => {
            let image;
            let options;

            if (item.product.images.length > 0) {
                image = (
                    <div className="product-image">
                        <AppLink href={url.product(item.product)} className="product-image__body">
                            <img className="product-image__img" src={item.product.images[0]} alt="" />
                        </AppLink>
                    </div>
                );
            }

            if (item.options.length > 0) {
                options = (
                    <ul className="cart-table__options">
                        {item.options.map((option, index) => (
                            <li key={index}>{`${option.optionTitle}: ${option.valueTitle}`}</li>
                        ))}
                    </ul>
                );
            }

            const removeButton = (
                <AsyncAction
                    action={() => cartRemoveItem(item.id)}
                    render={({ run, loading }) => {
                        const classes = classNames('btn btn-light btn-sm btn-svg-icon', {
                            'btn-loading': loading,
                        });

                        return (
                            <button type="button" onClick={run} className={classes}>
                                <Cross12Svg />
                            </button>
                        );
                    }}
                />
            );

            return (
                <tr key={item.id} className="cart-table__row">
                    <td className="cart-table__column cart-table__column--code" data-title="Code">
                        {item.product.code}
                    </td>
                    <td className="cart-table__column cart-table__column--image">{image}</td>
                    <td className="cart-table__column cart-table__column--product">
                        <AppLink href={url.product(item.product)} className="cart-table__product-name">
                            {item.product.title}
                        </AppLink>
                        {options}
                    </td>
                    <td className="cart-table__column cart-table__column--price" data-title="Price">
                        <CurrencyFormat value={item.price} currency={item.product.currency} />
                    </td>
                    <td className="cart-table__column cart-table__column--quantity" data-title="Quantity">
                        <InputNumber
                            onChange={(quantity) => handleChangeQuantity(item, quantity)}
                            value={getItemQuantity(item)}
                            min={item.product.unitMult}
                            step={item.product.unitMult}
                        />
                    </td>
                    <td className="cart-table__column cart-table__column--discount" data-title="Discount">
                        {item.product.discount ? `${item.product.discount}%` : ''}
                    </td>
                    <td className="cart-table__column cart-table__column--total" data-title="Total">
                        <CurrencyFormat value={item.total} currency={item.product.currency} />
                    </td>
                    <td className="cart-table__column cart-table__column--remove">{removeButton}</td>
                </tr>
            );
        });

        const cartTotals = (currency: string) =>
            cart.totals[currency]?.length > 0 && (
                <Fragment>
                    <thead className="cart__totals-header">
                        <tr>
                            <th>Subtotal</th>
                            <td>
                                <CurrencyFormat value={cart.subtotal[currency]} currency={currency} />
                            </td>
                        </tr>
                    </thead>
                    <tbody className="cart__totals-body">
                        {cart.totals[currency].map((extraLine, index) => {
                            let calcShippingLink;

                            return (
                                <tr key={index}>
                                    <th>{extraLine.title}</th>
                                    <td>
                                        <CurrencyFormat value={extraLine.price} currency={currency} />
                                        {calcShippingLink}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Fragment>
            );

        content = (
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
                                <th className="cart-table__column cart-table__column--remove" aria-label="Remove" />
                            </tr>
                        </thead>
                        <tbody className="cart-table__body">{cartItems}</tbody>
                    </table>

                    <div className="row justify-content-end pt-md-5 pt-4">
                        <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Totales</h3>
                                    <table className="cart__totals">
                                        {cartTotals('U$')}
                                        <tfoot className="cart__totals-footer">
                                            <tr>
                                                <th>Total dolares</th>
                                                <td>
                                                    <CurrencyFormat value={cart.total.U$} currency={'U$'} />
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Totales</h3>
                                    <table className="cart__totals">
                                        {cartTotals('$')}
                                        <tfoot className="cart__totals-footer">
                                            <tr>
                                                <th>Total pesos</th>
                                                <td>
                                                    <CurrencyFormat value={cart.total.$} currency={'$'} />
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <AppLink href={url.checkout()} className="btn btn-primary btn-xl btn-block cart__checkout-button">
                                        Comprar
                                    </AppLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        content = (
            <div className="block block-empty">
                <div className="container">
                    <div className="block-empty__body">
                        <div className="block-empty__message">Tu carro esta vacio!</div>
                        <div className="block-empty__actions">
                            <AppLink href="/" className="btn btn-primary btn-sm">
                                Continuar
                            </AppLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Fragment>
            <Head>
                <title>{`Carro de compras — ${theme.name}`}</title>
            </Head>

            <PageHeader header="Carro de compras" breadcrumb={breadcrumb} />

            {content}
        </Fragment>
    );
}

export default ShopPageCart;
