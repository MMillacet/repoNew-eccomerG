// react
import { Fragment, ChangeEvent, useEffect, useState } from 'react';

// third-party
import Head from 'next/head';
// application
// import AppLink from '../shared/AppLink';
// import Check9x7Svg from '../../svg/check-9x7.svg';
import { useUser } from '@auth0/nextjs-auth0';
// import Collapse, { CollapseRenderFn } from '../shared/Collapse';
import axios from 'axios';
import CurrencyFormat from '../shared/CurrencyFormat';

// data stubs
// import dataShopPayments from '../../data/shopPayments';
import theme from '../../data/theme';
import PromoHeader from './PromoHeader';

interface IPromoConfirm {
    setView: Function;
    productsSelected: any;
}

export default function PromoConfirm({ setView, productsSelected }: IPromoConfirm) {
    console.log({ productsSelected });

    const { user } = useUser();
    const { clientHeader }: any = user || {};

    const [orderType, setOrderType] = useState('');
    const [shipToCode, setShipToCode] = useState(clientHeader?.address[0]?.address);
    const [orderSuccessMessage, setOrderSuccessMessage] = useState('');
    const [orderFailedMessage, setOrderFailedMessage] = useState('');
    const [totalNewPrice, setTotalNewPrice] = useState<number>(0);

    const handleOrderTypeChange = (event: ChangeEvent<HTMLSelectElement>) => setOrderType(event.target.value);
    const handleShipToCodeChange = (event: ChangeEvent<HTMLSelectElement>) => setShipToCode(event.target.value);

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
        lines: productsSelected.items.map((item: any) => ({
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
        // const order = createOrder();
        // try {
        //     const res = await axios.post('/api/orders/create', { order });
        //     setOrderSuccessMessage(`Tu pedido fue realizado correctamente, pedido: ${res.data.orderId}`);
        // } catch (error) {
        //     setOrderFailedMessage('Hubo un problema para procesar su pedido. Por favor vuelva a intentar.');
        // }
    };

    useEffect(() => {
        setTotalNewPrice(0);
        productsSelected.forEach((item: any) => {
            if (item.quantity > 0) {
                setTotalNewPrice(
                    (prevState) =>
                        prevState + (item.product.price - item.product.price * (item.product.u_Porcentaje / 100)) * item.quantity,
                );
            }
        });
    }, [productsSelected]);

    const getTax = () => (22 * totalNewPrice) / 100;

    const totals = () => {
        // const shipping = cart.totals.$.find((x: CartTotal) => x.type === 'shipping');
        const taxPesos = getTax();
        const taxDollars = getTax();
        // const r1 = (
        //     <tr key={1}>
        //         <th>Envio</th>
        //         <td></td>
        //         <td>
        //             <CurrencyFormat value={shippingCost} />
        //         </td>
        //     </tr>
        // );

        const r2 = (taxPesos || taxDollars) && (
            <tr key={2}>
                <th>Impuestos</th>
                <td>{productsSelected[0].product.currency === 'U$D' && <CurrencyFormat value={taxDollars} currency={'U$D'} />}</td>
                <td>{productsSelected[0].product.currency === '$' && <CurrencyFormat value={taxPesos} />}</td>
            </tr>
        );

        return [r2];
    };

    const cartItems = (
        <Fragment>
            {productsSelected.map((item: any) => {
                if (item.quantity > 0) {
                    return (
                        <tr key={item.id}>
                            <td>{`${item.product.itemName} × ${item.quantity}`}</td>
                            <td>
                                {item.product.currency === 'U$D' && (
                                    <CurrencyFormat value={totalNewPrice} currency={item.product.currency} />
                                )}
                            </td>
                            <td>
                                {item.product.currency === '$' && <CurrencyFormat value={totalNewPrice} currency={item.product.currency} />}
                            </td>
                        </tr>
                    );
                }
                return null;
            })}
        </Fragment>
    );

    const cartTable = (
        <table className="checkout__totals">
            <thead className="checkout__totals-header">
                <tr>
                    <th>Producto</th>
                    <th>Total U$D</th>
                    <th>Total $</th>
                </tr>
            </thead>
            <tbody className="checkout__totals-products">{cartItems}</tbody>
            {totals().length > 0 && (
                <tbody className="checkout__totals-subtotals">
                    <tr>
                        <th>Subtotal</th>
                        <td>
                            {productsSelected[0].product.currency === 'U$D' && <CurrencyFormat value={totalNewPrice} currency={'U$D'} />}
                        </td>
                        <td>{productsSelected[0].product.currency === '$' && <CurrencyFormat value={totalNewPrice} currency={'$'} />}</td>
                    </tr>
                    {totals()}
                </tbody>
            )}
            <tfoot className="checkout__totals-footer">
                <tr>
                    <th>Total</th>
                    <td>
                        {productsSelected[0].product.currency === 'U$D' && (
                            <CurrencyFormat value={totalNewPrice + getTax()} currency={'U$D'} />
                        )}
                    </td>
                    <td>
                        {productsSelected[0].product.currency === '$' && <CurrencyFormat value={totalNewPrice + getTax()} currency={'$'} />}
                    </td>
                </tr>
            </tfoot>
        </table>
    );
    const breadcrumb = [{ title: 'Lista' }, { title: 'Checkout' }, { title: 'Confirmar pedido' }];

    return (
        <Fragment>
            <Head>
                <title>{`Confirmar pedido — ${theme.name}`}</title>
            </Head>

            <PromoHeader setView={setView} header="Confirmar pedido" breadcrumb={breadcrumb} />

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
                                        <h3 className="card-title">Tu Pedido</h3>

                                        {cartTable}

                                        <button type="submit" className="btn btn-primary btn-xl btn-block" onClick={handleOrderSubmit}>
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
