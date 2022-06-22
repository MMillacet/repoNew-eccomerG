import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const { term, orderby, family, category, subcategory, subsubcategory, brand } = req.query;

    const cardcode = session ? session.user.cardcode : null;

    const params = {
        term: term as string,
        orderby: orderby as string,
        family: family as string,
        category: category as string,
        subcategory: subcategory as string,
        subsubcategory: subsubcategory as string,
        brand: brand as string,
        cardcode,
    };

    const result = await goldfarbApi.getProductsSearch(params);

    res.status(200).json(result);
};
