import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const cardcode = session && session.user.cardcode;

    if (!cardcode) {
        res.status(404).json({ error: 'No cardcode found' });
        return;
    }

    const result = await goldfarbApi.getAccountStatus(cardcode);

    res.status(200).json(result);
});
