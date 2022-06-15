// react
import { useEffect, useState } from 'react';

// third-party
import Head from 'next/head';
import axios from 'axios';

// application

import AppLink from '../shared/AppLink';
import Pagination from '../shared/Pagination';
import CurrencyFormat from '../shared/CurrencyFormat';

const limit = 12;

function AccountPageStatus() {
    const [accountStatus, setAccountStatus] = useState<any>(null);
    const [page, setPage] = useState(1);
    const [items, setItems] = useState<[]>([]);

    const handlePageChange = (page: number) => {
        const start = (page - 1) * limit;
        const end = start + limit;
        const items = accountStatus.lines.slice(start, end);
        setPage(page);
        setItems(items);
    };

    useEffect(() => {
        const getAccountStatus = async () => {
            const { data }: any = await axios.get('/api/account/status');
            setAccountStatus(data);
            setItems(data.lines.slice(0, limit));
        };

        getAccountStatus();
    }, []);

    const url: any = {
        Fac: '/account/documents/invoice',
        Ndc: '/account/documents/return',
        Rec: '/account/documents/receipt',
    };

    const statusList = items?.map((item: any, i: number) => {
        const docNum = item?.docNum?.trim();
        return (
            <tr key={i}>
                <td>{docNum && <AppLink href={`${url[item.doc1]}/${docNum}`}>{`#${docNum}`}</AppLink>}</td>
                <td>{item.doc1}</td>
                <td>{item.doc2}</td>
                <td>{item.invoice}</td>
                <td>{item.date}</td>
                <td>
                    <CurrencyFormat value={item.balanceP} />
                </td>
                <td>
                    <CurrencyFormat value={item.balanceD} currency={'U$D'} />
                </td>
            </tr>
        );
    });

    return (
        <div className="card">
            <Head>
                <title>{`Estado de cuenta`}</title>
            </Head>

            <div className="card-header">
                <h5>Estado de cuenta</h5>
                <br />
                <div className="status-card__row">
                    <div className="status-card__row-title">Cliente</div>
                    <div className="status-card__row-content">{accountStatus?.name}</div>
                </div>
                <div className="status-card__row">
                    <div className="status-card__row-title">Codigo</div>
                    <div className="status-card__row-content">{accountStatus?.name}</div>
                </div>
                <div className="status-card__row">
                    <div className="status-card__row-title">RUT</div>
                    <div className="status-card__row-content">{accountStatus?.rut}</div>
                </div>
                <div className="status-card__row">
                    <div className="status-card__row-title">Saldo $</div>
                    <div className="status-card__row-content">
                        <CurrencyFormat value={accountStatus?.balanceP} />
                    </div>
                </div>
                <div className="status-card__row">
                    <div className="status-card__row-title">Saldo D</div>
                    <div className="status-card__row-content">
                        <CurrencyFormat value={accountStatus?.balanceD} currency={'U$D'} />
                    </div>
                </div>
            </div>

            <div className="card-divider" />
            <div className="card-table">
                <div className="table-responsive-sm">
                    <table>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Doc</th>
                                <th>Doc</th>
                                <th>Factura</th>
                                <th>Fecha</th>
                                <th>Saldo $</th>
                                <th>Saldo U$D</th>
                            </tr>
                        </thead>
                        <tbody>{statusList}</tbody>
                    </table>
                </div>
            </div>
            <div className="card-divider" />
            <div className="card-footer">
                <Pagination current={page} total={Math.ceil(accountStatus?.lines.length / limit)} onPageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default AccountPageStatus;
