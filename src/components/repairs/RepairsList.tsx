import Head from 'next/head';
import { Fragment } from 'react';
import theme from '../../data/theme';
import { IRepairs } from '../../interfaces/repairs';
import PageHeader from '../shared/PageHeader';

export interface RepairsListProps {
    repairs: IRepairs[];
}

export default function RepairsList(props: RepairsListProps) {
    const { repairs } = props;
    const breadcrumb = [
        { title: 'Inicio', url: '/' },
        { title: 'Mis reparaciones', url: '' },
    ];

    console.log({ repairs });

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
                        {repairs.map((item, index) => (
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
