import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { GetServerSidePropsContext } from 'next';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import goldfarbApi from '../../api/goldfarb';
import PromosList from '../../components/promos/PromosList';
import { IPromo } from '../../interfaces/promo';

export interface PageProps {
    promos: IPromo[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req, res } = context;

    const session = await getSession(req, res);

    const cardcode = session?.user?.cardcode || null;

    if (cardcode) {
        try {
            const promos = await goldfarbApi.getPromos(cardcode);
            return {
                props: {
                    promos,
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

function Page({ promos }: PageProps) {
    return <PromosList promos={promos} />;
}

export default withPageAuthRequired(Page as any);
