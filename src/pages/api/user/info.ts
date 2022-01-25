import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import auth0Api from '../../../api/auth0';
import goldfarbApi from '../../../api/goldfarb';
import { transformUser } from '../../../services/user';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    if (session) {
        const user = await auth0Api.info(session.accessToken);
        const transformedUser = transformUser(user);

        if (!transformedUser.cardcode) {
            res.status(401).json({ error: 'User not authenticated' });
        } else {
            const clientHeader = await goldfarbApi.getOrderHeader(transformedUser.cardcode);

            session.user = {
                initialised: true,
                ...session.user,
                ...transformedUser,
                clientHeader,
            };

            res.status(200).json(session.user);
        }
    } else {
        // Should be auth because of withApiAuthRequired
        res.status(401).json({ error: 'User not authenticated' });
    }
});
