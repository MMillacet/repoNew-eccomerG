// import { getSession } from '@auth0/nextjs-auth0';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    // const session = getSession(req, res);

    const { order } = req.body;

    // console.log({ order });
    // const cardcode = session ? session.user.cardcode : '400092';

    const result = await goldfarbApi.postOrder(order);

    if (result.state === 'B') {
        res.status(200).json({ orderId: result.message });
    } else {
        console.error({ error: result });
        res.status(500).json({ error: result });
    }
});
