import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function paginate(array: any[], pageSize: number, pageNumber: number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const { search, page, size, sort } = req.query;

    const cardcode = session ? session.user.cardcode : '400092';

    const products = await goldfarbApi.getProductsSearch2(
        search as string,
        sort as string,
        cardcode as string,
    );

    const result = paginate(products, Number(size), Number(page));

    // Create dummy and inefficent with no cache
    // Then add redis cache
    res.status(200).json({ result });
};
