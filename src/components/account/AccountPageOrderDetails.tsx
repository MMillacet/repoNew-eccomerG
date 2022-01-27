// react
import { Fragment } from 'react';

// third-party
import Head from 'next/head';

// application
import AppLink from '../shared/AppLink';
import url from '../../services/url';
import { IGoldfarbOrder } from '../../interfaces/order';
import CurrencyFormat from '../shared/CurrencyFormat';

export interface AccountOrderDetailProps {
    order: IGoldfarbOrder;
}

export default function AccountPageOrderDetails(props: AccountOrderDetailProps) {
    const { order } = props;

    const orderItems = order.lines.map((line) => (
        <tr key={line.lineNum}>
            <td>{`${line.description} × ${line.quantity}`}</td>
            <td>{line.currency === 'U$' && <CurrencyFormat value={line.total} currency={line.currency} />}</td>
            <td>{line.currency === '$' && <CurrencyFormat value={line.total} currency={line.currency} />}</td>
        </tr>
    ));

    const totals = () => {
        const shipping = { price: 0 };
        const { taxPesos, taxDolares } = order.header;

        const r1 = shipping && (
            <tr key={1}>
                <th>Envio</th>
                <td></td>
                <td>{/* <CurrencyFormat value={shipping.price} /> */}</td>
            </tr>
        );

        const r2 = (taxPesos || taxDolares) && (
            <tr key={2}>
                <th>Impuestos</th>
                <td>{taxDolares > 0 && <CurrencyFormat value={taxDolares} currency={'U$'} />}</td>
                <td>{taxPesos > 0 && <CurrencyFormat value={taxPesos} />}</td>
            </tr>
        );

        return [r1, r2];
    };

    const { street, city } = order.header.addressExtention;

    return (
        <Fragment>
            <Head>
                <title>{`Detalle pedido`}</title>
            </Head>

            <div className="card">
                <div className="order-header">
                    <div className="order-header__actions">
                        <AppLink href={url.accountOrders()} className="btn btn-xs btn-secondary">
                            Volver a pedidos
                        </AppLink>
                    </div>
                    <h5 className="order-header__title">Pedido #{order.header.orderId}</h5>
                    <div className="order-header__subtitle">
                        Pedido fue creado el{' '}
                        <mark className="order-header__date">{new Date(order.header.docDate).toLocaleDateString()}</mark> y esta siendo{' '}
                        <mark className="order-header__status">procesado</mark>.
                    </div>
                    <div className="order-header__subtitle">
                        Dirección de envio: <mark className="order-header__status">{`${street}, ${city}`}</mark>.
                    </div>
                </div>
                <div className="card-divider" />
                <div className="card-table">
                    <div className="table-responsive-sm">
                        <table>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Total U$</th>
                                    <th>Total $</th>
                                </tr>
                            </thead>
                            <tbody className="card-table__body card-table__body--merge-rows">{orderItems}</tbody>
                            <tbody className="card-table__body card-table__body--merge-rows">{totals()}</tbody>
                            <tfoot>
                                <tr>
                                    <th>Total</th>
                                    <td>
                                        {order.header.totalDolares > 0 && (
                                            <CurrencyFormat value={order.header.totalDolares} currency={'U$'} />
                                        )}
                                    </td>
                                    <td>{order.header.totalPesos > 0 && <CurrencyFormat value={order.header.totalPesos} />}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

            {/* <div className="row mt-3 no-gutters mx-n2">
                <div className="col-sm-6 col-12 px-2">
                    <div className="card address-card address-card--featured">
                        <div className="address-card__body">
                            <div className="address-card__badge address-card__badge--muted">Shipping Address</div>
                            <div className="address-card__name">Helena Garcia</div>
                            <div className="address-card__row">
                                Random Federation
                                <br />
                                115302, Moscow
                                <br />
                                ul. Varshavskaya, 15-2-178
                            </div>
                            <div className="address-card__row">
                                <div className="address-card__row-title">Phone Number</div>
                                <div className="address-card__row-content">38 972 588-42-36</div>
                            </div>
                            <div className="address-card__row">
                                <div className="address-card__row-title">Email Address</div>
                                <div className="address-card__row-content">goldfarb@example.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-12 px-2 mt-sm-0 mt-3">
                    <div className="card address-card address-card--featured">
                        <div className="address-card__body">
                            <div className="address-card__badge address-card__badge--muted">Billing Address</div>
                            <div className="address-card__name">Helena Garcia</div>
                            <div className="address-card__row">
                                Random Federation
                                <br />
                                115302, Moscow
                                <br />
                                ul. Varshavskaya, 15-2-178
                            </div>
                            <div className="address-card__row">
                                <div className="address-card__row-title">Phone Number</div>
                                <div className="address-card__row-content">38 972 588-42-36</div>
                            </div>
                            <div className="address-card__row">
                                <div className="address-card__row-title">Email Address</div>
                                <div className="address-card__row-content">goldfarb@example.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </Fragment>
    );
}
