// import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';
// import goldfarbApi from '../../../api/goldfarb';

const fileCode = (itemcode: number) => `${itemcode - (itemcode % 1000)}`;

const lookupProductsLocally = async (itemcodes: string[]) => {
    const codes = itemcodes.map((itemcode) => Number(itemcode));

    const result: any[] = [];

    await Promise.all(
        codes.map(async (code) => {
            const filecode = fileCode(code);

            const filename = path.resolve('./public', `products/${filecode}.json`);

            // const filename = `${path.join(process.cwd(), `/src/data/products/${filecode}.json`)}`;
            // const

            const products = JSON.parse(await fs.readFile(filename, 'utf8'));
            const product = products[code];

            result.push(product);
        }),
    );

    return result;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // const session = getSession(req, res);

    const { itemcodes } = req.query || '';

    // const cardcode = session ? session.user.cardcode : null;

    const products = await (await lookupProductsLocally((itemcodes as string).split(','))).filter((p) => p?.images?.length > 0).slice(0, 5);

    // const result = await goldfarbApi.getProductsLookup2({ itemcodes: (itemcodes as string).split(','), cardcode });

    res.status(200).json({ products });
};
