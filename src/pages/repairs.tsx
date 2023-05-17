// application

import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { GetServerSidePropsContext } from 'next';
import goldfarbApi from '../api/goldfarb';
import RepairsList from '../components/repairs/RepairsList';

export interface PageProps {
    repairs: any;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req, res } = context;

    const session = await getSession(req, res);

    const cardcode = session?.user?.cardcode || null;

    try {
        if (cardcode) {
            const { orders } = await goldfarbApi.getRepairs(cardcode);
            return {
                props: {
                    repairs: orders ?? [],
                },
            };
        }
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            repairs: [],
        },
    };
}

function Page({ repairs }: PageProps) {
    return <RepairsList repairs={repairs} />;
}

export default withPageAuthRequired(Page as any);
