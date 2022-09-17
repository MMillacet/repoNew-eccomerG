import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import goldfarbApi from '../../api/goldfarb';
import PromoProducts from '../../components/promos/Promo';
import { IPromo } from '../../interfaces/promo';

interface IParams extends ParsedUrlQuery {
    orderId: string;
}

export interface PageProps {
    promo: IPromo;
}

export async function getServerSideProps(context: GetServerSidePropsContext<IParams>) {
    const { params } = context;
    const { id } = params as IParams;

    try {
        const allPromos = await goldfarbApi.getPromos(400092);
        allPromos.forEach((allpr: any) => {
            if (allpr.u_Tipo === 'CP') {
                console.log({ allpr });
            }
        });

        const promo = await goldfarbApi.getPromo(Number(id), 400092);
        console.log({ a: promo.lines[0] });

        return {
            props: {
                promo,
            },
        };
    } catch (error) {
        return { notFound: true };
    }
}

function Page({ promo }: PageProps) {
    return <PromoProducts promo={promo} />;
}

export default Page;
