// import { getSession } from '@auth0/nextjs-auth0';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    const { cart } = req.body;

    const result = await goldfarbApi.postOrder(cart);

    if (result.state !== 'E') {
        res.status(200).json({ orderId: result.message });
    } else {
        console.error({ error: result });
        res.status(500).json({ error: result });
    }
});
