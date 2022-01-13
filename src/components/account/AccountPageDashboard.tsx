// third-party
import Head from 'next/head';

// application
import { useUser } from '@auth0/nextjs-auth0';
import AppLink from '../shared/AppLink';
import CurrencyFormat from '../shared/CurrencyFormat';
import url from '../../services/url';

// data stubs
import dataAccountOrders from '../../data/accountOrders';

export default function AccountPageDashboard() {
    const { user } = useUser() as any;
    const { clientHeader }: any = user || {};

    const orders = dataAccountOrders.slice(0, 3).map((order) => (
        <tr key={order.id}>
            <td>
                <AppLink href={url.accountOrder({ id: 5 })}>#{order.id}</AppLink>
            </td>
            <td>{order.date}</td>
            <td>{order.status}</td>
            <td>
                <CurrencyFormat value={order.total} /> for {order.quantity} item(s)
            </td>
        </tr>
    ));

    return (
        <div className="dashboard">
            <Head>
                <title>{`My Account — ${user?.name}`}</title>
            </Head>

            <div className="dashboard__profile card profile-card">
                <div className="card-body profile-card__body">
                    <div className="profile-card__avatar">
                        <img src="/images/avatars/avatar-3.jpg" alt="" />
                    </div>
                    <div className="profile-card__name">{user?.name}</div>
                    <div className="profile-card__email">{user?.email}</div>
                    <div className="profile-card__edit">
                        <AppLink href={url.accountProfile()} className="btn btn-secondary btn-sm">
                            Editar Perfil
                        </AppLink>
                    </div>
                </div>
            </div>
            <div className="dashboard__address card address-card address-card--featured">
                {clientHeader?.address[0]?.address && <div className="address-card__badge">Dirección por defecto</div>}
                <div className="address-card__body">
                    <div className="address-card__name">{clientHeader?.address[0]?.address}</div>
                    <div className="address-card__row">
                        {clientHeader?.address[0]?.street}
                        <br />
                        {clientHeader?.address[0]?.city}
                        <br />
                    </div>
                    <br />
                    <div className="address-card__row">
                        <div className="address-card__row-title">Numero de telefono</div>
                        <div className="address-card__row-content">{user?.phone}</div>
                    </div>
                    <br />
                    <div className="address-card__row">
                        <div className="address-card__row-title">Email</div>
                        <div className="address-card__row-content">{user?.email}</div>
                    </div>
                </div>
            </div>
            <div className="dashboard__orders card">
                <div className="card-header">
                    <h5>Pedidos recientes</h5>
                </div>
                <div className="card-divider" />
                <div className="card-table">
                    <div className="table-responsive-sm">
                        <table>
                            <thead>
                                <tr>
                                    <th>Order</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>{orders}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
