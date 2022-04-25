import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const { id } = req.query;

    const cardcode = session && session.user.cardcode;

    if (!cardcode) {
        res.status(404).json({ error: 'No cardcode found' });
        return;
    }

    try {
        const {
            products: [product],
        } = await goldfarbApi.getProductsLookup({ itemcodes: [`${id}`], cardcode, withDesc: 'true' });

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error });
    }
});
