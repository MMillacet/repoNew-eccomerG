import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const { id } = req.query;

    const cardcode = session && session.user?.cardcode;

    try {
        const {
            products: [product],
        } = await goldfarbApi.getProductsLookup({ itemcodes: [`${id}`], cardcode, withDesc: 'true' });

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error });
    }
};
