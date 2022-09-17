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
        const promo = await goldfarbApi.getPromo(Number(id), 400092);

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
