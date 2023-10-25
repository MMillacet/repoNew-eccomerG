// react
import { Fragment, useEffect, useState } from 'react';

// third-party
import classNames from 'classnames';
import Head from 'next/head';

// application
import { useUser } from '@auth0/nextjs-auth0';
import { toast } from 'react-toastify';
import AppLink from '../shared/AppLink';
import AsyncAction from '../shared/AsyncAction';
import Cross12Svg from '../../svg/cross-12.svg';
import CurrencyFormat from '../shared/CurrencyFormat';
import InputNumber from '../shared/InputNumber';
import PageHeader from '../shared/PageHeader';
import url from '../../services/url';
import { CartItem } from '../../store/cart/cartTypes';
import { useCartAddItems, useCart, useCartRemoveItem, useCartUpdateQuantities } from '../../store/cart/cartHooks';

// data stubs
import theme from '../../data/theme';
import goldfarbApi from '../../api/goldfarb';
import { saveItems, saveRemoveItem, saveUpdateItem } from '../../api/helpers/cart';
import ShopPromoPart from './ShopPromoPart';

export interface Quantity {
    itemId: number;
    value: string | number;
}

export interface AddProducts {
    itemId: string;
    quantity: string;
    pastedItems: boolean;
}

function ShopPageCart() {
    const [quantities, setQuantities] = useState<Quantity[]>([]);
    const [productNumbers, setProductNumbers] = useState<AddProducts>({ itemId: '', quantity: '', pastedItems: false });
    const [loading, setLoading] = useState<boolean>(false);

    const { user } = useUser();

    const cart = useCart();
    const cartRemoveItem = useCartRemoveItem();
    const cartUpdateQuantities = useCartUpdateQuantities();
    const cartAddItems = useCartAddItems();

    const getItemQuantity = (item: CartItem) => {
        const quantity = quantities.find((x) => x.itemId === item.id);

        return quantity ? quantity.value : item.quantity;
    };

    const handleUpdateQuantities = (newQuantities: Quantity[]) => {
        const updateQuantities = async () => {
            await saveUpdateItem(
                cart,
                newQuantities.map((x) => ({
                    ...x,
                    value: typeof x.value === 'string' ? parseFloat(x.value) : x.value,
                })),
                user,
            );
        };
        if (user) {
            updateQuantities();
        }
    };

    useEffect(() => {
        if (quantities.length > 0) {
            handleUpdateQuantities(quantities);
        }
    }, [quantities]);

    const handleRemoveItem = async (item: CartItem) => {
        if (!(await saveRemoveItem(cart, item.product, user))) return Promise.resolve();

        return cartRemoveItem(item.id);
    };

    const handleChangeQuantity = (item: CartItem, quantity: string | number) => {
        const quantityToSet = quantity;
        if (quantityToSet === '') {
            handleRemoveItem(item);
        } else {
            const index: number = quantities.findIndex((x) => x.itemId === item.id);

            const newQuantities =
                index === -1
                    ? [
                          ...quantities,
                          {
                              itemId: item.id,
                              value: quantityToSet,
                              step: item.product.unitMult,
                          },
                      ]
                    : [
                          ...quantities.slice(0, index),
                          {
                              ...quantities[index],
                              value: quantityToSet,
                              step: item.product.unitMult,
                          },
                          ...quantities.slice(index + 1),
                      ];

            setQuantities(newQuantities);
            cartUpdateQuantities(
                newQuantities.map((x) => ({
                    ...x,
                    value: typeof x.value === 'string' ? parseFloat(x.value) : x.value,
                })),
            );
        }
    };

    const breadcrumb = [
        { title: 'Inicio', url: '/' },
        { title: 'Carro de compras', url: '' },
    ];

    let content;

    const getTotalsTaxes = (currency: string) => {
        let total = 0;

        cart.cartWeb.totals[currency].forEach((extraLine) => {
            total = extraLine.price;
        });
        cart.cartPromo.totals[currency].forEach((extraLine) => {
            total += extraLine.price;
        });

        if (total > 0) {
            return (
                <tr>
                    <th>Impuestos</th>
                    <td>
                        <CurrencyFormat value={total} currency={currency} />
                    </td>
                </tr>
            );
        }
        return null;
    };

    const handleAddMultipleProducts = async () => {
        setLoading(true);
        if (productNumbers.itemId.length > 0 && productNumbers.quantity.length > 0 && user) {
            const listItems = productNumbers.itemId.split(' ');
            const listQuantityItems = productNumbers.quantity.split(' ');

            if (listItems.length !== listQuantityItems.length) {
                toast.error(`Cantidad de codigos diferente a cantidad de unidades`, { theme: 'colored' });
            } else {
                const allProductsToAdd = [];
                const allProductsQuanititiesToAdd = [];

                for (let index = 0; index < listItems.length; index += 1) {
                    try {
                        // eslint-disable-next-line no-await-in-loop
                        const data = await goldfarbApi.getProducts(listItems[index], user.cardcode as number);

                        let quantity = Number(listQuantityItems[index]);
                        if (data.unitMult && Number(listQuantityItems[index]) % data.unitMult !== 0) {
                            quantity = data.unitMult;
                        }

                        allProductsToAdd.push(data);
                        allProductsQuanititiesToAdd.push(quantity);
                    } catch {
                        toast.error(`Error agregando producto ${listItems[index]}`, { theme: 'colored' });
                    }
                }
                if (await saveItems(cart, allProductsToAdd, allProductsQuanititiesToAdd, user)) {
                    // eslint-disable-next-line no-await-in-loop
                    await cartAddItems(allProductsToAdd, [], allProductsQuanititiesToAdd);
                    setProductNumbers({ itemId: '', quantity: '', pastedItems: false });
                }
            }
        }
        setLoading(false);
    };

    const addProductComponent = () => (
        <div className="cart__table cart-table cart-table__add_section">
            <div className="row cart-table__add_row">
                <div className=" col-md-4 cart-table__add_input">
                    <div>Codigo</div>
                    <input
                        type="text"
                        className="cart-table__add_input_width form-control"
                        id="checkout-last-name"
                        value={productNumbers.itemId}
                        min="0"
                        max="200"
                        onChange={(e) => {
                            setProductNumbers((prevState) => ({
                                ...prevState,
                                itemId: e.target.value,
                                pastedItems: e.target.value.length - productNumbers.itemId.length > 1,
                            }));
                        }}
                        placeholder="Agregue el codigo"
                    />
                </div>
                <div className=" col-md-4 cart-table__add_input">
                    <div>Cantidad</div>
                    <input
                        type="text"
                        className="cart-table__add_input_width form-control"
                        id="checkout-last-name"
                        value={productNumbers.quantity}
                        min="0"
                        max="200"
                        onChange={(e) => {
                            setProductNumbers((prevState) => ({ ...prevState, quantity: e.target.value }));
                        }}
                        placeholder="Agregue la cantidad"
                    />
                </div>
                <div className=" col-md-4 cart-table__add_btn-row">
                    <button disabled={loading} onClick={handleAddMultipleProducts} className="btn btn-block btn-primary">
                        Agregar producto
                    </button>
                </div>
            </div>
        </div>
    );

    if (cart.cartWeb.quantity || cart.cartPromo.promos.length > 0) {
        const cartItems = cart.cartWeb.items.map((item) => {
            let image;
            let options;
            if (item.product.images.length > 0) {
                image = (
                    <div className="product-image">
                        <AppLink href={url.product(item.product)} className="product-image__body">
                            <img className="product-image__img" src={item.product.images[0].url} alt="" />
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
                    action={() => handleRemoveItem(item)}
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
                            onBlur={() => handleUpdateQuantities(quantities)}
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
            (cart.cartWeb.totals[currency]?.length > 0 || cart.cartPromo.totals[currency]?.length > 0) && (
                <Fragment>
                    <thead className="cart__totals-header">
                        <tr>
                            <th>Subtotal</th>
                            <td>
                                <CurrencyFormat
                                    value={cart.cartWeb.subtotal[currency] + cart.cartPromo.subtotal[currency]}
                                    currency={currency}
                                />
                            </td>
                        </tr>
                    </thead>
                    <tbody className="cart__totals-body">{getTotalsTaxes(currency)}</tbody>
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
                    {addProductComponent()}
                    {cart.cartPromo.promos.length > 0 &&
                        cart.cartPromo.promos.map((promo, index) => <ShopPromoPart key={index} promo={promo} />)}

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
                                                    <CurrencyFormat
                                                        value={cart.cartWeb.total.U$ + cart.cartPromo.total.U$}
                                                        currency={'U$'}
                                                    />
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
                                                    <CurrencyFormat value={cart.cartWeb.total.$ + cart.cartPromo.total.$} currency={'$'} />
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
                    {addProductComponent()}
                    <div className="block-empty__body">
                        <div className="block-empty__message">Tu carro esta vacio!</div>
                        <div className="block-empty__actions">
                            <AppLink href="/" className="btn btn-primary btn-sm">
                                Continuar
                            </AppLink>
                        </div>
                        {addProductComponent}
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
