import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

const DOCS_EXT = ['jpg', 'pdf'];
const DOCS_BASE_URL = 'https://goldfarb.blob.core.windows.net/goldfarb/documentos/';

async function isUrlFound(url: string): Promise<boolean> {
    try {
        const response = await fetch(url, { method: 'HEAD', cache: 'no-cache' });
        return response.status === 200;
    } catch (error) {
        return false;
    }
}

async function getDocumentsForExt(id: string, ext: string): Promise<string[]> {
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

async function getDocuments(id: string) {
    const docs: string[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for await (const ext of DOCS_EXT) {
        const extdocs = await getDocumentsForExt(id, ext);
        docs.push(...extdocs);
    }

    return docs;
}

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id as string;

    const result = await getDocuments(id);
    res.status(200).json(result);
});
