import type { NextApiRequest, NextApiResponse } from 'next';

const DOCS_EXT = ['jpg'];
const DOCS_BASE_URL = 'https://goldfarb.blob.core.windows.net/goldfarb/imagenes/';

async function isUrlFound(url: string): Promise<boolean> {
    try {
        const response = await fetch(url, { method: 'HEAD', cache: 'no-cache' });
        return response.status === 200;
    } catch (error) {
        return false;
    }
}

async function getImagesExt(id: string, ext: string): Promise<string[]> {
    const docs: string[] = [];

    let i = 1;
    let exit = false;

    while (!exit && i < 10) {
        const url = i === 1 ? `${DOCS_BASE_URL}${id}.${ext}` : `${DOCS_BASE_URL}${id}-${i}.${ext}`;
        // eslint-disable-next-line no-await-in-loop
        const found = await isUrlFound(url);

        if (found) {
            docs.push(url);
        } else {
            exit = true;
        }

        i += 1;
    }

    return docs;
}

async function getImages(id: string) {
    const imgs: string[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for await (const ext of DOCS_EXT) {
        const extimgs = await getImagesExt(id, ext);
        imgs.push(...extimgs);
    }

    return imgs;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id as string;

    const result = await getImages(id);
    res.status(200).json(result);
};
