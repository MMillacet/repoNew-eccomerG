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
import { CartTotal } from '../../store/cart/cartTypes';

// export type RenderPaymentFn = CollapseRenderFn<HTMLLIElement, HTMLDivElement>;

function ShopPageCheckout() {
    const router = useRouter();
    const cart = useCart();
    const emptyCart = useCartEmpty();
    // const [currentPayment, setCurrentPayment] = useState('bank');

    const { user } = useUser();
    const { clientHeader }: any = user || {};

    const [orderType, setOrderType] = useState('');
    const [shipToCode, setShipToCode] = useState(clientHeader?.address[0]?.address);
    const [orderSuccessMessage, setOrderSuccessMessage] = useState('');
    const [orderFailedMessage, setOrderFailedMessage] = useState('');

    // const handlePaymentChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.checked) {
    //         setCurrentPayment(event.target.value);
    //     }
    // };

    const handleOrderTypeChange = (event: ChangeEvent<HTMLSelectElement>) =>
        setOrderType(event.target.value);
    const handleShipToCodeChange = (event: ChangeEvent<HTMLSelectElement>) =>
        setShipToCode(event.target.value);

    useEffect(() => {
        if (cart.stateFrom === 'client' && cart.items.length < 1 && !orderSuccessMessage) {
            const linkProps = url.cart();

            router.replace(linkProps.href, linkProps.as).then();
        }
    }, [cart.stateFrom, cart.items.length, router, orderSuccessMessage]);

    if (cart.items.length < 1 && !orderSuccessMessage) {
        return null;
    }

    const createOrder = () => ({
        header: {
            cardcode: user?.cardcode,
            cardname: user?.name,
            remito: clientHeader.remito,
            tipoMov: clientHeader.tipoMov,
            tipoPed: orderType,
            discount: clientHeader.discount,
            shipToCode,
        },
        lines: cart.items.map((item) => ({
            itemcode: item.product.code,
            description: item.product.title,
            quantity: item.quantity,
            currency: item.product.currency,
            price: item.product.price,
            discount: item.product.discount,
            total: item.total,
        })),
    });

    const handleOrderSubmit = async (/* event: FormEvent<HTMLButtonElement> */) => {
        const order = createOrder();
        try {
            const res = await axios.post('/api/orders/create', { order });
            setOrderSuccessMessage(
                `Tu pedido fue realizado correctamente, orden: ${res.data.orderId}`,
            );
            emptyCart();
        } catch(error) {
            setOrderFailedMessage(
                'Hubo un problema para procesar su orden. Por favor vuelva a intentar.',
            );
        }
    };

    const totals = () => {
        const shipping = cart.totals.$.find((x: CartTotal) => x.type === 'shipping');
        const taxPesos = cart.totals.$.find((x: CartTotal) => x.type === 'tax');
        const taxDollars = cart.totals.U$.find((x: CartTotal) => x.type === 'tax');

        const r1 = shipping && (
            <tr key={1}>
                <th>Envio</th>
                <td></td>
                <td>
                    <CurrencyFormat value={shipping.price} />
                </td>
            </tr>
        );

        const r2 = (taxPesos || taxDollars) && (
            <tr key={2}>
                <th>Impuestos</th>
                <td>
                    {taxDollars && taxDollars.price > 0 && (
                        <CurrencyFormat value={taxDollars.price} currency={'U$'} />
                    )}
                </td>
                <td>
                    {taxPesos && taxPesos.price > 0 && <CurrencyFormat value={taxPesos.price} />}
                </td>
            </tr>
        );

        return [r1, r2];
    };

    const cartItems = cart.items.map((item) => (
        <tr key={item.id}>
            <td>{`${item.product.title} × ${item.quantity}`}</td>
            <td>
                {item.product.currency === 'U$' && (
                    <CurrencyFormat value={item.total} currency={item.product.currency} />
                )}
            </td>
            <td>
                {item.product.currency === '$' && (
                    <CurrencyFormat value={item.total} currency={item.product.currency} />
                )}
            </td>
        </tr>
    ));

    const cartTable = (
        <table className="checkout__totals">
            <thead className="checkout__totals-header">
                <tr>
                    <th>Producto</th>
                    <th>Total U$</th>
                    <th>Total $</th>
                </tr>
            </thead>
            <tbody className="checkout__totals-products">{cartItems}</tbody>
            {totals().length > 0 && (
                <tbody className="checkout__totals-subtotals">
                    <tr>
                        <th>Subtotal</th>
                        <td>
                            <CurrencyFormat value={cart.subtotal.U$} currency={'U$'} />
                        </td>
                        <td>
                            <CurrencyFormat value={cart.subtotal.$} currency={'$'} />
                        </td>
                    </tr>
                    {totals()}
                </tbody>
            )}
            <tfoot className="checkout__totals-footer">
                <tr>
                    <th>Total</th>
                    <td>
                        <CurrencyFormat value={cart.total.U$} currency={'U$'} />
                    </td>
                    <td>
                        <CurrencyFormat value={cart.total.$} currency={'$'} />
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
                                        <h3 className="card-title">Direccion</h3>
                                        <div className="row">
                                            <div className="col-6 col-lg-6 col-xl-6">
                                                <div className="form-group">
                                                    <label htmlFor="checkout-country">
                                                        Forma de entrega
                                                    </label>
                                                    <select
                                                        id="checkout-orderType"
                                                        className="form-control"
                                                        value={orderType}
                                                        onChange={handleOrderTypeChange}
                                                    >
                                                        <option value="">
                                                            Seleccione forma de entrega...
                                                        </option>
                                                        <option value="N">
                                                            Goldfarb envia a cliente
                                                        </option>
                                                        <option value="R">
                                                            Cliente retira en Pantaleón Pérez
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            {orderType === 'N' && (
                                                <div className="col-6 col-lg-6 col-xl-6">
                                                    <div className="form-group">
                                                        <label htmlFor="checkout-shipToCode">
                                                            Dirección de entrega
                                                        </label>
                                                        <select
                                                            id="checkout-country"
                                                            className="form-control"
                                                            value={shipToCode}
                                                            onChange={handleShipToCodeChange}
                                                        >
                                                            {clientHeader?.addresses?.map(
                                                                (address: any) => (
                                                                    <option
                                                                        key={address.address}
                                                                        value={address.address}
                                                                    >
                                                                        {address.street}
                                                                    </option>
                                                                ),
                                                            )}
                                                        </select>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-12 col-xl-12 mt-4 mt-lg-0">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <h3 className="card-title">Tu Orden</h3>

                                        {cartTable}

                                        {/* <div className="payment-methods">
                                        <ul className="payment-methods__list">{payments}</ul>
                                    </div> */}

                                        <button
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
                            {orderSuccessMessage && (
                                <div className="alert alert-success mb-3">
                                    {orderSuccessMessage}
                                </div>
                            )}
                            {orderFailedMessage && (
                                <div className="alert alert-danger mb-3">{orderFailedMessage}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ShopPageCheckout;
