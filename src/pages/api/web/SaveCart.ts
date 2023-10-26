import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    // eslint-disable-next-line prefer-const
    let { email, cardcode, lines, promos } = req.query || '';

    // eslint-disable-next-line no-nested-ternary
    cardcode = cardcode && cardcode !== 'undefined' ? cardcode : session ? session.user.cardcode : null;

    if (cardcode) {
        const data = await goldfarbApi.saveCart(lines, promos, String(cardcode), String(email));
        res.status(200).json({ data });
    }
};
