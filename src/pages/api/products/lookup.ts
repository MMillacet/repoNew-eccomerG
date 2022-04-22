// import { getSession } from '@auth0/nextjs-auth0';
import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';
// import goldfarbApi from '../../../api/goldfarb';

const fileCode = (itemcode: number) => `${itemcode - (itemcode % 1000)}`;

const lookupProductsLocally = async (itemcodes: string[]) => {
    const codes = itemcodes.filter(Number).map((itemcode) => Number(itemcode));

    const result: any[] = [];

    await Promise.all(
        codes.map(async (code) => {
            const filecode = fileCode(code);

            const products = await (await fetch(`https://goldfarb-ecommerce.vercel.app/products/${filecode}.json`)).json();

            const product = products[code];

            result.push(product);
        }),
    );

    return result;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const results = 5;

    const { itemcodes: itemcodesString } = req.query || '';

    const itemcodes = (itemcodesString as string).split(',');

    const products = await (await lookupProductsLocally(itemcodes)).filter((product) => product);

    const missingProductsItemcodes = itemcodes.filter((itemcode: string) => !products.find((p) => p.itemcode === Number(itemcode)));

    const topProducts = products.filter((p) => p?.images?.length > 0).slice(0, results);

    if (topProducts.length < results && missingProductsItemcodes.length > 0) {
        const cardcode = session ? session.user.cardcode : null;
        const { products: missingProducts } = await goldfarbApi.getProductsLookup2({ itemcodes: missingProductsItemcodes, cardcode });
        missingProducts.forEach((p) => products.push(p));
    }

    res.status(200).json({ products: topProducts });
};
