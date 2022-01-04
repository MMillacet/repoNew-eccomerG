// application
import { getSession } from '@auth0/nextjs-auth0';
import { GetServerSidePropsContext } from 'next';
import goldfarbApi from '../../api/goldfarb';
import AccountLayout from '../../components/account/AccountLayout';
import AccountPageOrders from '../../components/account/AccountPageOrders';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req, res } = context;

    const session = await getSession(req, res);

    const cardcode = session?.user?.cardcode || null;

    try {
        if (cardcode) {
            const { orders } = await goldfarbApi.getOrders(cardcode);
            return {
                props: {
                    orders: orders ?? [],
                },
            };
        }
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            orders: [],
        },
    };
}

export interface AccountPageOrdersProps {
    orders: any[];
}

function Page({ orders }: AccountPageOrdersProps) {
    return <AccountPageOrders orders={orders} />;
}

Page.Layout = AccountLayout;

export default Page;
