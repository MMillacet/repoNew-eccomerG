import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// function paginate(array: any[], pageSize: number, pageNumber: number) {
//     // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
//     return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
// }

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const { term, orderby, family, category, subcategory } = req.query;

    const cardcode = session ? session.user.cardcode : null;

    const params = {
        term: term as string,
        orderby: orderby as string,
        family: family as string,
        category: category as string,
        subcategory: subcategory as string,
        cardcode,
    };

    const result = await goldfarbApi.getProductsSearch2(params);

    // Create dummy and inefficent with no cache
    // Then add redis cache
    res.status(200).json({ result });
};
