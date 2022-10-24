// import { getSession } from '@auth0/nextjs-auth0';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const email = session && session.user.email;

    const { order } = req.body;

    order.header.email = email;

    return goldfarbApi.postPromo(order);
});
