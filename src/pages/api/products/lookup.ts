import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    // eslint-disable-next-line prefer-const
    let { itemcodes, cardcode, withDesc } = req.query || '';

    itemcodes = (itemcodes as string).split(',');
    // eslint-disable-next-line no-nested-ternary
    cardcode = cardcode && cardcode !== 'undefined' ? cardcode : session ? session.user.cardcode : null;

    if (cardcode) {
        const { products } = await goldfarbApi.getProductsLookup({ itemcodes, cardcode: cardcode as string, withDesc: withDesc as string });
        res.status(200).json({ products });
    } else {
        const { products } = await goldfarbApi.getProductsLookup({ itemcodes, withDesc: withDesc as string });
        res.status(200).json({ products });
    }
};
