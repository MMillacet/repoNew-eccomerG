import { getAccessToken } from '@auth0/nextjs-auth0';
import { GetServerSidePropsContext } from 'next';
// application
import AccountLayout from '../../components/account/AccountLayout';
import AccountPageProfile from '../../components/account/AccountPageProfile';
import { IUser } from '../../interfaces/user';
import { transformUser } from '../../services/user';


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
    // Here you can check authentication status directly before rendering the page,
    // however the page would be a serverless function, which is more expensive and
    // slower than a static page with client side authentication
    const { accessToken } = await getAccessToken(req, res);

    const auth0Url = 'https://goldfarb.us.auth0.com'

    const response = await fetch(`${auth0Url}/userinfo`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

    const userinfo = await response.json();

    return {
        props: {
            user: transformUser(userinfo),
        },
    };
}

export default Page;


