import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const orderId = req.query.orderId as string;

    const cardcode = session && session.user.cardcode;

    if (!cardcode) {
        res.status(404).json({ error: 'No cardcode found' });
        return;
    }

    try {
        const result = await goldfarbApi.getOrder(orderId, cardcode);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// todo delete
