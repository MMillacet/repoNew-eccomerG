import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import goldfarbApi from '../../api/goldfarb';
import PromoProducts from '../../components/promos/Promo';
import { IProduct } from '../../interfaces/product';

interface IParams extends ParsedUrlQuery {
    orderId: string;
}

export interface PageProps {
    products: IProduct[];
    promo: any;
}

export async function getServerSideProps(context: GetServerSidePropsContext<IParams>) {
    const { params } = context;
    const { id } = params as IParams;

    console.log({ id });
    try {
        const products = await goldfarbApi.getPromoProducts(185, 400092);
        const promos = await goldfarbApi.getPromos(400092);
        const promo = promos.find((pro: any) => pro.docEntry === 185);

        return {
            props: {
                products,
                promo,
            },
        };
    } catch (error) {
        return { notFound: true };
    }
}

function Page({ products, promo }: PageProps) {
    return <PromoProducts products={products} promo={promo} />;
}

export default Page;
