// application
import { getSession } from '@auth0/nextjs-auth0';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import goldfarbApi from '../../../api/goldfarb';
import AccountLayout from '../../../components/account/AccountLayout';
import AccountPageOrderDetails from '../../../components/account/AccountPageOrderDetails';
import SitePageNotFound from '../../../components/site/SitePageNotFound';

interface IParams extends ParsedUrlQuery {
    orderId: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext<IParams>) {
    const { req, res, params } = context;

    const { orderId } = params as IParams;

    const session = await getSession(req, res);

    const cardcode = session?.user?.cardcode || null;

    try {
        if (cardcode) {
            const order = await goldfarbApi.getOrder(orderId, cardcode);
            return {
                props: {
                    order,
                },
            };
        }
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            order: null,
        },
    };
}

export interface AccountOrderDetailProps {
    order: any;
}

function Page({ order }: AccountOrderDetailProps) {
    if (order === null) {
        return <SitePageNotFound />;
    }

    return <AccountPageOrderDetails order={order} />;
}

Page.Layout = AccountLayout;

export default Page;
