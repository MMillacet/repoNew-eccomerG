import { Fragment, ChangeEvent, useState } from 'react';
import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';
import CurrencyFormat from '../shared/CurrencyFormat';
import theme from '../../data/theme';
import PromoHeader from './PromoHeader';
import { IProductPromoSelected } from '../../interfaces/product';
import goldfarbApi from '../../api/goldfarb';

export interface IPromoProducts {
    promoContainer: any;
}

export default function PromoConfirm({ promoContainer }: IPromoProducts) {
    const { promo, setView, productsSelected, totalNewPriceUYU, totalNewPriceUSD } = promoContainer;

    const { user } = useUser();
    const { clientHeader }: any = user || {};

    const [orderType, setOrderType] = useState('R');
    const [shipToCode, setShipToCode] = useState(clientHeader?.address[0]?.address);
    const [orderSuccessMessage, setOrderSuccessMessage] = useState('');
    const [orderFailedMessage, setOrderFailedMessage] = useState('');

    const handleOrderTypeChange = (event: ChangeEvent<HTMLSelectElement>) => setOrderType(event.target.value);
    const handleShipToCodeChange = (event: ChangeEvent<HTMLSelectElement>) => setShipToCode(event.target.value);

    const getProductsLines = () => {
        const res: any[] = [];
        productsSelected.forEach((item: IProductPromoSelected) => {
            if (item.quantity > 0) {
                res.push({ itemCode: item.product.itemCode, quantity: item.quantity });
            }
            return null;
        });
        return res;
    };

    const createOrder = () => ({
        idPromo: promo.docEntry,
        header: {
            cardcode: user?.cardcode,
            cardname: user?.name,
            shipToCode,
            // transpCode,
            tipoMov: clientHeader.tipoMov,
            tipoPed: orderType,
            // comments
            discount: clientHeader.discount,
            remito: clientHeader.remito,
            addressExtention: '',
        },
        lines: getProductsLines(),
    });

    const handleOrderSubmit = async (/* event: FormEvent<HTMLButtonElement> */) => {
        const order = createOrder();
        try {
            const response = await goldfarbApi.postPromo(order);
            if (response.state === 'E') {
                setOrderFailedMessage('Hubo un problema para procesar su pedido. Por favor vuelva a intentar.');
            } else {
                setOrderSuccessMessage(`Tu pedido fue realizado correctamente`);
            }
        } catch (err) {
            setOrderFailedMessage('Hubo un problema para procesar su pedido. Por favor vuelva a intentar.');
        }
    };

    const getPriceItem = (item: IProductPromoSelected) => {
        let price = (item.product.price - item.product.price * (item.product.finalDiscount / 100)) * item.quantity;
        if (item.product.factorQty) {
            price *= item.product.factorQty;
        }
        return price;
    };

    const getTax = (price: number) => (22 * price) / 100;

    const totals = () => {
        const taxPesos = getTax(totalNewPriceUYU);
        const taxDollars = getTax(totalNewPriceUSD);

        const r2 = (taxPesos || taxDollars) && (
            <tr key={2}>
                <th>Impuestos</th>
                <td>{<CurrencyFormat value={taxDollars} currency={'U$D'} />}</td>
                <td>{<CurrencyFormat value={taxPesos} />}</td>
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
                                {item.product.currency === 'U$' && (
                                    <CurrencyFormat value={getPriceItem(item)} currency={item.product.currency} />
                                )}
                            </td>
                            <td>
                                {item.product.currency === '$' && (
                                    <CurrencyFormat value={getPriceItem(item)} currency={item.product.currency} />
                                )}
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
                        <td>{<CurrencyFormat value={totalNewPriceUSD} currency={'U$D'} />}</td>
                        <td>{<CurrencyFormat value={totalNewPriceUYU} currency={'$'} />}</td>
                    </tr>
                    {totals()}
                </tbody>
            )}
            <tfoot className="checkout__totals-footer">
                <tr>
                    <th>Total</th>
                    <td>{<CurrencyFormat value={totalNewPriceUSD + getTax(totalNewPriceUSD)} currency={'U$D'} />}</td>
                    <td>{<CurrencyFormat value={totalNewPriceUYU + getTax(totalNewPriceUYU)} currency={'$'} />}</td>
                </tr>
            </tfoot>
        </table>
    );
    const breadcrumb = [{ title: 'Lista' }, { title: 'Verifica tu seleccion' }, { title: 'Confirmar pedido' }];

    return (
        <Fragment>
            <Head>
                <title>{`Confirmar pedido — ${theme.name}`}</title>
            </Head>

            <PromoHeader setView={setView} header="Confirmar pedido" breadcrumb={breadcrumb} />

            {!orderSuccessMessage && (
                <div className="checkout block confirm-section">
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
