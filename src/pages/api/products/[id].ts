import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

const IMG_EXT = ['jpg'];
const IMG_BASE_URL = 'https://goldfarb.blob.core.windows.net/goldfarb/imagenes/';

async function isUrlFound(url: string) {
    try {
        const response = await fetch(url, { method: 'HEAD', cache: 'no-cache' });
        return response.status === 200;
    } catch (error) {
        return false;
    }
}

async function getImagesExt(id: string, ext: string) {
    const imgs = [];

    let i = 0;
    let exit = false;

    while (!exit && i < 10) {
        const url = i === 0 ? `${IMG_BASE_URL}${id}.${ext}` : `${IMG_BASE_URL}${id}-${i}.${ext}`;
        // eslint-disable-next-line no-await-in-loop
        const found = await isUrlFound(url);

        if (found) {
            imgs.push(url);
        } else {
            exit = true;
        }

        i += 1;
    }

    return imgs;
}

async function getImages(id: string) {
    const imgs = [];

    // eslint-disable-next-line no-restricted-syntax
    for await (const ext of IMG_EXT) {
        const extimgs = await getImagesExt(id, ext);
        imgs.push(...extimgs);
    }

    return imgs;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const { id } = req.query;

    const cardcode = session && session.user?.cardcode;

    try {
        const {
            products: [product],
        } = await goldfarbApi.getProductsLookup({ itemcodes: [`${id}`], cardcode, withDesc: 'true' });

        const images = await getImages(product.id);

        product.images = images;

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error });
    }
};
