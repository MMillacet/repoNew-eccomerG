import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const cardcode = session && session.user.cardcode;
    const {invoice} = req.body;
    const email = session && session.user.email;

    if (!cardcode || !invoice || !invoice.folioPref || !invoice.folioNum || !email) {
        res.status(404).json({ error: 'No data found' });
        return;
    }

    const result = await goldfarbApi.sendCFE(invoice.folioPref, invoice.folioNum, cardcode, email);

    res.status(200).json(result);
});

// todo delete
