import Head from 'next/head';
import { Fragment, useState } from 'react';
import Pagination from '../shared/Pagination';
import theme from '../../data/theme';
import { IRepairs } from '../../interfaces/repairs';
import PageHeader from '../shared/PageHeader';

export interface RepairsListProps {
    repairs: IRepairs[];
}

export default function RepairsList(props: RepairsListProps) {
    const { repairs } = props;
    const [page, setPage] = useState(1);
    const breadcrumb = [
        { title: 'Inicio', url: '/' },
        { title: 'Mis reparaciones', url: '' },
    ];
    const rowsPerPage = 10;

    const handlePagination = (e: any) => {
        setPage(e);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const content = (
        <div className="cart block">
            <div className="container">
                <table className="">
                    <thead className="repairs-table__head">
                        <tr className="repairs-table__row">
                            <th className="repairs-th">Número</th>
                            <th className="repairs-th">Codigo</th>
                            <th className="repairs-th">Nombre</th>
                            <th className="repairs-th">Tipo </th>
                            <th className="repairs-th">Asunto</th>
                            <th className="repairs-th">Estado</th>
                            <th className="repairs-th">Resolución</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repairs.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage).map((item, index) => (
                            <tr key={index} className="repairs-table__row">
                                <td className="repairs-td" data-title="Code">
                                    {item.docNum}
                                </td>
                                <td className="repairs-td" data-title="Code">
                                    {item.itemCode}
                                </td>
                                <td className="repairs-td" data-title="Code">
                                    {item.itemName}
                                </td>
                                <td className="repairs-td" data-title="Code">
                                    {item.callType}
                                </td>
                                <td className="repairs-td" data-title="Code">
                                    {item.subject}
                                </td>
                                <td className="repairs-td" data-title="Code">
                                    {item.status}
                                </td>
                                <td className="repairs-td" data-title="Code">
                                    {item.resolution}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="products-view__pagination">
                <Pagination current={page} siblings={2} total={Math.round(repairs.length / rowsPerPage)} onPageChange={handlePagination} />
            </div>
        </div>
    );

    return (
        <Fragment>
            <Head>
                <title>{`Mis reparaciones — ${theme.name}`}</title>
            </Head>

            <PageHeader header="Mis reparaciones" breadcrumb={breadcrumb} />

            {content}
        </Fragment>
    );
}
