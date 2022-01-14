import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const { itemcodes } = req.query || '';

    const cardcode = session ? session.user.cardcode : null;

    const result = await goldfarbApi.getProductsLookup2({ itemcodes: (itemcodes as string).split(','), cardcode });

    res.status(200).json(result);
};
