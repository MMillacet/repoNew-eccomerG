// react
import { Fragment, ChangeEvent, useEffect, useState } from 'react';

// third-party
import Head from 'next/head';
import { useRouter } from 'next/router';

// application
// import AppLink from '../shared/AppLink';
// import Check9x7Svg from '../../svg/check-9x7.svg';
import { useUser } from '@auth0/nextjs-auth0';
// import Collapse, { CollapseRenderFn } from '../shared/Collapse';
import axios from 'axios';
import CurrencyFormat from '../shared/CurrencyFormat';
import PageHeader from '../shared/PageHeader';
import url from '../../services/url';

// data stubs
// import dataShopPayments from '../../data/shopPayments';
import theme from '../../data/theme';
import { useCart, useCartEmpty } from '../../store/cart/cartHooks';

// export type RenderPaymentFn = CollapseRenderFn<HTMLLIElement, HTMLDivElement>;

function ShopPageCheckout() {
    const router = useRouter();
    const cart = useCart();
    const emptyCart = useCartEmpty();
    // const [currentPayment, setCurrentPayment] = useState('bank');
    const [shippingCost, setShippingCost] = useState(0);
    const [loading, setLoading] = useState(false);

    const { user } = useUser();
    const { clientHeader }: any = user || {};

    const [orderType, setOrderType] = useState('');
    const [shipToCode, setShipToCode] = useState(clientHeader?.address[0]?.address);
    const [orderSuccessMessage, setOrderSuccessMessage] = useState('');
    const [orderFailedMessage, setOrderFailedMessage] = useState('');
    const [delveryTypeError, setDelveryTypeError] = useState(false);
    const [delveryError, setDelveryError] = useState(false);

    useEffect(() => {
        const getShipping = async () => {
            const type = orderType;
            if (type) {
                const data = await (
                    await fetch(
                        `/api/shipping?totalp=${cart.cartWeb.total.$ + cart.cartPromo.total.$}&totald=${
                            cart.cartWeb.total.U$ + cart.cartPromo.total.U$
                        }&tipoPedido=${type}`,
                    )
                ).json();
                setShippingCost(data);
            }
        };
        getShipping();
    }, [cart.cartWeb.total, cart.cartPromo.total, orderType]);

    useEffect(() => {
        setDelveryTypeError(false);
    }, [orderType]);

    // const handlePaymentChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.checked) {
    //         setCurrentPayment(event.target.value);
    //     }
    // };

    const handleOrderTypeChange = (event: ChangeEvent<HTMLSelectElement>) => setOrderType(event.target.value);
    const handleShipToCodeChange = (event: ChangeEvent<HTMLSelectElement>) => setShipToCode(event.target.value);

    useEffect(() => {
        if (cart.stateFrom === 'client' && cart.cartWeb.items.length < 1 && cart.cartPromo.promos.length < 1 && !orderSuccessMessage) {
            const linkProps = url.cart();

            router.replace(linkProps.href, linkProps.as).then();
        }
    }, [cart.stateFrom, cart.cartWeb.items.length, router, orderSuccessMessage]);

    if (cart.cartWeb.items.length < 1 && cart.cartPromo.promos.length < 1 && !orderSuccessMessage) {
        return null;
    }

    const createOrder = () => ({
        header: {
            cardname: user?.name,
            remito: clientHeader.remito,
            tipoMov: clientHeader.tipoMov,
            tipoPed: orderType,
            discount: clientHeader.discount,
            shipToCode,
            email: user?.email,
            cardcode: user?.cardcode,
        },
        email: user?.email,
        cardcode: user?.cardcode,
        lines: cart.cartWeb.items.map((item) => ({
            itemcode: Number(item.product.itemCode),
            quantity: item.quantity,
        })),
        promos: cart.cartPromo.promos.map((promo) => ({
            idPromo: promo.idPromo,
            lines: promo.lines.map((item) => ({
                itemCode: Number(item.product.itemCode),
                quantity: item.quantity,
            })),
        })),
    });

    const checkDeliveryTypesSelected = () => {
        if (orderType.length > 0) {
            setDelveryTypeError(false);
            if (orderType === 'N') {
                if (shipToCode.length > 0) {
                    setDelveryError(false);
                    return true;
                }

                setDelveryError(true);
                return false;
            }
            return true;
        }
        setDelveryTypeError(true);
        setDelveryError(false);

        return false;
    };

    const handleOrderSubmit = async (/* event: FormEvent<HTMLButtonElement> */) => {
        if (checkDeliveryTypesSelected()) {
            setLoading(true);
            const cart = createOrder();
            try {
                const res = await axios.post('/api/orders/create', { cart });
                setOrderSuccessMessage(`Tu pedido fue realizado correctamente, pedido: ${res.data.orderId}`);
                emptyCart();
            } catch (error) {
                setOrderFailedMessage('Hubo un problema para procesar su pedido. Por favor vuelva a intentar.');
            }
            setLoading(false);
        }
    };

    const getTotalsValue = (currency: string) => {
        const taxWeb = cart.cartWeb.totals[currency][0]?.price;
        const taxPromo = cart.cartPromo.totals[currency][0]?.price;
        return taxWeb + taxPromo;
    };

    const totals = () => {
        // const shipping = cart.totals.$.find((x: CartTotal) => x.type === 'shipping');
        const taxPesos = getTotalsValue('$');
        const taxDollars = getTotalsValue('U$');

        const r1 = (
            <tr key={1}>
                <th>Envio</th>
                <td></td>
                <td>
                    <CurrencyFormat value={shippingCost} />
                </td>
            </tr>
        );

        const r2 = (taxPesos || taxDollars) && (
            <tr key={2}>
                <th>Impuestos</th>
                <td>{taxDollars > 0 && <CurrencyFormat value={taxDollars} currency={'U$'} />}</td>
                <td>{taxPesos > 0 && <CurrencyFormat value={taxPesos} />}</td>
            </tr>
        );

        return [r1, r2];
    };

    const cartItems = cart.cartWeb.items.map((item) => (
        <tr key={item.id}>
            <td>{`${item.product.itemCode} - ${item.product.title} × ${item.quantity}`}</td>
            <td>{item.product.currency === 'U$' && <CurrencyFormat value={item.total} currency={item.product.currency} />}</td>
            <td>{item.product.currency === '$' && <CurrencyFormat value={item.total} currency={item.product.currency} />}</td>
        </tr>
    ));

    const cartPromoItems = cart.cartPromo.promos.map((promo) =>
        promo.lines.map((item) => (
            <tr key={item.product.id}>
                <td>{`${item.product.itemCode} - ${item.product.itemName} × ${item.quantity}`}</td>
                <td>{item.product.currency === 'U$' && <CurrencyFormat value={item.total} currency={item.product.currency} />}</td>
                <td>{item.product.currency === '$' && <CurrencyFormat value={item.total} currency={item.product.currency} />}</td>
            </tr>
        )),
    );

    const cartTable = (
        <table className="checkout__totals">
            <thead className="checkout__totals-header">
                <tr>
                    <th>Producto</th>
                    <th>Total U$</th>
                    <th>Total $</th>
                </tr>
            </thead>
            <tbody className="checkout__totals-products">
                {cartItems}
                {cartPromoItems}
            </tbody>
            {totals().length > 0 && (
                <tbody className="checkout__totals-subtotals">
                    <tr>
                        <th>Subtotal</th>
                        <td>
                            <CurrencyFormat value={cart.cartWeb.subtotal.U$ + cart.cartPromo.subtotal.U$} currency={'U$'} />
                        </td>
                        <td>
                            <CurrencyFormat value={cart.cartWeb.subtotal.$ + cart.cartPromo.subtotal.$} currency={'$'} />
                        </td>
                    </tr>
                    {totals()}
                </tbody>
            )}
            <tfoot className="checkout__totals-footer">
                <tr>
                    <th>Total</th>
                    <td>
                        <CurrencyFormat value={cart.cartWeb.total.U$ + cart.cartPromo.total.U$} currency={'U$'} />
                    </td>
                    <td>
                        <CurrencyFormat value={cart.cartWeb.total.$ + cart.cartPromo.total.$} currency={'$'} />
                    </td>
                </tr>
            </tfoot>
        </table>
    );

    // const payments = dataShopPayments.map((payment) => {
    //     const renderPayment: RenderPaymentFn = ({ setItemRef, setContentRef }) => (
    //         <li className="payment-methods__item" ref={setItemRef}>
    //             <label className="payment-methods__item-header">
    //                 <span className="payment-methods__item-radio input-radio">
    //                     <span className="input-radio__body">
    //                         <input
    //                             type="radio"
    //                             className="input-radio__input"
    //                             name="checkout_payment_method"
    //                             value={payment.key}
    //                             checked={currentPayment === payment.key}
    //                             onChange={handlePaymentChange}
    //                         />
    //                         <span className="input-radio__circle" />
    //                     </span>
    //                 </span>
    //                 <span className="payment-methods__item-title">{payment.title}</span>
    //             </label>
    //             <div className="payment-methods__item-container" ref={setContentRef}>
    //                 <div className="payment-methods__item-description text-muted">
    //                     {payment.description}
    //                 </div>
    //             </div>
    //         </li>
    //     );

    //     return (
    //         <Collapse
    //             key={payment.key}
    //             open={currentPayment === payment.key}
    //             toggleClass="payment-methods__item--active"
    //             render={renderPayment}
    //         />
    //     );
    // });

    const breadcrumb = [
        { title: 'Inicio', url: url.home() },
        { title: 'Carro', url: url.cart() },
        { title: 'Confirmar pedido', url: '' },
    ];

    return (
        <Fragment>
            <Head>
                <title>{`Confirmar pedido — ${theme.name}`}</title>
            </Head>

            <PageHeader header="Confirmar pedido" breadcrumb={breadcrumb} />

            {!orderSuccessMessage && (
                <div className="checkout block">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-xl-12 mt-4 mt-lg-0">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <h3 className="card-title">Tu Pedido</h3>

                                        {cartTable}

                                        {/* <div className="payment-methods">
                                        <ul className="payment-methods__list">{payments}</ul>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-12 col-xl-12 mt-4 mt-lg-0">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <h3 className="card-title">Direccion</h3>
                                        <div className="row">
                                            <div className="col-6 col-lg-6 col-xl-6">
                                                <div className="form-group">
                                                    <label htmlFor="checkout-country">Forma de entrega</label>
                                                    <select
                                                        id="checkout-orderType"
                                                        className="form-control"
                                                        value={orderType}
                                                        onChange={handleOrderTypeChange}
                                                    >
                                                        <option value="">Seleccione forma de entrega...</option>
                                                        <option value="N">Goldfarb envia a cliente</option>
                                                        <option value="R">Cliente retira en Pantaleón Pérez</option>
                                                    </select>
                                                    {delveryTypeError && (
                                                        <label className="mt-2 col-12 alert alert-danger mb-3">
                                                            Seleccione forma de entrega
                                                        </label>
                                                    )}
                                                </div>
                                            </div>
                                            {orderType === 'N' && (
                                                <div className="col-6 col-lg-6 col-xl-6">
                                                    <div className="form-group">
                                                        <label htmlFor="checkout-shipToCode">Dirección de entrega</label>
                                                        <select
                                                            id="checkout-country"
                                                            className="form-control"
                                                            value={shipToCode}
                                                            onChange={handleShipToCodeChange}
                                                        >
                                                            {clientHeader?.addresses?.map((address: any) => (
                                                                <option key={address.address} value={address.address}>
                                                                    {address.street}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {delveryError && (
                                                            <label className="alert alert-danger mb-3">Seleccione dirección</label>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            disabled={loading}
                                            type="submit"
                                            className="btn btn-primary btn-xl btn-block"
                                            onClick={handleOrderSubmit}
                                        >
                                            Realizar pedido
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="checkout block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-xl-12 mt-4 mt-lg-0">
                            {orderSuccessMessage && <div className="alert alert-success mb-3">{orderSuccessMessage}</div>}
                            {orderFailedMessage && <div className="alert alert-danger mb-3">{orderFailedMessage}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ShopPageCheckout;
