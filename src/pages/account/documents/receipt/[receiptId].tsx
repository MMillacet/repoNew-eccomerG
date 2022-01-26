// application
import { getSession } from '@auth0/nextjs-auth0';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import goldfarbApi from '../../../../api/goldfarb';
import AccountLayout from '../../../../components/account/AccountLayout';
import AccountPageReceiptDetails from '../../../../components/account/AccountPageReceiptDetails';
import SitePageNotFound from '../../../../components/site/SitePageNotFound';
import { IGoldfarbReceipt } from '../../../../interfaces/invoice';

interface IParams extends ParsedUrlQuery {
    receiptId: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext<IParams>) {
    const { req, res, params } = context;

    const { receiptId } = params as IParams;

    const session = await getSession(req, res);

    const cardcode = session?.user?.cardcode || null;

    try {
        if (cardcode) {
            const receipt = await goldfarbApi.getReceipt(receiptId);

            return {
                props: {
                    receipt,
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

export interface AccountReceiptDetailProps {
    receipt: IGoldfarbReceipt;
}

function Page({ receipt }: AccountReceiptDetailProps) {
    if (receipt === null) {
        return <SitePageNotFound />;
    }

    return <AccountPageReceiptDetails receipt={receipt} />;
}

Page.Layout = AccountLayout;

export default Page;
