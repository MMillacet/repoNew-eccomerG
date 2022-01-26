// application
import { getSession } from '@auth0/nextjs-auth0';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import goldfarbApi from '../../../../api/goldfarb';
import AccountLayout from '../../../../components/account/AccountLayout';
import AccountPageInvoiceDetails from '../../../../components/account/AccountPageInvoiceDetails';
import SitePageNotFound from '../../../../components/site/SitePageNotFound';
import { IGoldfarbInvoice } from '../../../../interfaces/invoice';

interface IParams extends ParsedUrlQuery {
    invoiceId: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext<IParams>) {
    const { req, res, params } = context;

    const { invoiceId } = params as IParams;

    const session = await getSession(req, res);

    const cardcode = session?.user?.cardcode || null;

    try {
        if (cardcode) {
            const invoice = await goldfarbApi.getInvoiceReturn(invoiceId, cardcode);

            return {
                props: {
                    invoice,
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

export interface AccountInvoiceDetailProps {
    invoice: IGoldfarbInvoice;
}

function Page({ invoice }: AccountInvoiceDetailProps) {
    if (invoice === null) {
        return <SitePageNotFound />;
    }

    return <AccountPageInvoiceDetails invoice={invoice} isReturn={true} />;
}

Page.Layout = AccountLayout;

export default Page;
