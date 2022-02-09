// pages/api/auth/[...auth0].js
import { handleAuth, handleCallback, handleLogin, Session } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import auth0Api from '../../../api/auth0';
import goldfarbApi from '../../../api/goldfarb';
import { transformUser } from '../../../services/user';

const afterCallback = async (req: NextApiRequest, res: NextApiResponse, session: Session) => {
    if (session) {
        const user = await auth0Api.info(session?.accessToken);
        const transformedUser = transformUser(user);

        const clientHeader = await goldfarbApi.getOrderHeader(transformedUser.cardcode);

        // eslint-disable-next-line no-param-reassign
        session.user = {
            initialised: true,
            ...session.user,
            ...transformedUser,
            clientHeader,
        };
    }

    return session;
};

export default handleAuth({
    async login(req, res) {
        await handleLogin(req, res, {
            returnTo: '/account/activate',
        });
    },
    async callback(req, res) {
        await handleCallback(req, res, { afterCallback });
    },
});
