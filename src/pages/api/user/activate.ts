import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import auth0Api from '../../../api/auth0';
import goldfarbApi from '../../../api/goldfarb';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    if (session) {
        const { email } = await auth0Api.info(session.accessToken);
        const { cardcode } = req.query;
        await goldfarbApi.sendActivationEmail(cardcode as string, email);
        res.status(200).json({ success: true });
    } else {
        // Should be auth because of withApiAuthRequired
        res.status(401).json({ error: 'User not authenticated' });
    }
});
