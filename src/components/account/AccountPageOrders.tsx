// react
import { useEffect, useState } from 'react';

// third-party
import Head from 'next/head';

// application
import AppLink from '../shared/AppLink';
import CurrencyFormat from '../shared/CurrencyFormat';
import Pagination from '../shared/Pagination';
// import url from '../../services/url';

const limit = 12;

export interface AccountPageOrdersProps {
    orders: any[];
}

function AccountPageOrders(props: AccountPageOrdersProps) {
    const { orders } = props;

    const [page, setPage] = useState<any>(1);
    const [items, setItems] = useState<any>([]);

    const handlePageChange = (page: number) => {
        const start = (page - 1) * limit;
        const end = start + limit;
        const items = orders.slice(start, end);
        setPage(page);
        setItems(items);
    };

    useEffect(() => {
        setItems(orders.slice(0, limit));
    }, [orders]);

    const ordersList = items?.map((item: any, i: number) => {
        const date = new Date(item.docDate);
        const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const orderStatus = item.Pedido === 'Borrador' ? 'Pendiente' : 'Procesando';

        return (
            <tr key={i}>
                <td>
                    {item?.key && (
                        <AppLink href={`/account/orders/${item.key}`}>{`#${item.key}`}</AppLink>
                    )}
                </td>
                <td>{dateString}</td>
                <td>{orderStatus}</td>
                <td>
                    <CurrencyFormat value={item.totalPedido} />
                </td>
            </tr>
        );
    });

    return (
        <div className="card">
            <Head>
                <title>{`Historial de pedidos`}</title>
            </Head>

            <div className="card-header">
                <h5>Historial de pedidos</h5>
            </div>
            <div className="card-divider" />
            <div className="card-table">
                <div className="table-responsive-sm">
                    <table>
                        <thead>
                            <tr>
                                <th>Pedido</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>{ordersList}</tbody>
                    </table>
                </div>
            </div>
            <div className="card-divider" />
            <div className="card-footer">
                <Pagination
                    current={page}
                    total={Math.ceil(ordersList?.length / limit)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default AccountPageOrders;
