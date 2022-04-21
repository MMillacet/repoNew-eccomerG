import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../api/goldfarb';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const { totalp, totald, tipoPedido } = req.query;

    const cardcode = session ? session.user.cardcode : null;

    const rate = await goldfarbApi.getExchangeRate();

    const params = {
        total: Number(totalp) + Number(totald) * rate,
        tipoPedido: tipoPedido as string,
        cardcode,
    };

    const result = await goldfarbApi.getShipping(params);

    res.status(200).json(result);
});
