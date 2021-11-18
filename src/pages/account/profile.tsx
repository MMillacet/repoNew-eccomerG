import { getSession } from '@auth0/nextjs-auth0';
import { GetServerSidePropsContext } from 'next';
// application
import AccountLayout from '../../components/account/AccountLayout';
import AccountPageProfile from '../../components/account/AccountPageProfile';
import { IUser } from '../../interfaces/user';


export interface ProfileProps {
    user: IUser
}

function Page(props: ProfileProps) {
    const { user } = props;

    return <AccountPageProfile user={user} />;
}

Page.Layout = AccountLayout;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { req, res } = context;

    const session = await getSession(req, res);

    if (session) {
        return {
            props: {
                user: session.user,
            },
        };
    }
}

export default Page;


