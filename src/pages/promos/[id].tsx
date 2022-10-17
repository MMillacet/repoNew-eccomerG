import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
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
    const { req, res, params } = context;
    const { id } = params as IParams;

    const session = await getSession(req, res);

    const cardcode = session?.user?.cardcode || null;

    if (cardcode) {
        try {
            const promo = await goldfarbApi.getPromo(Number(id), cardcode);
            return {
                props: {
                    promo,
                },
            };
        } catch (error) {
            return { notFound: true };
        }
    }
    return {
        props: {
            redirect: {
                destination: '/api/auth/login',
                permanent: false,
            },
        },
    };
}

function Page({ promo }: any) {
    return <PromoProducts promo={promo} />;
}

export default withPageAuthRequired(Page);
