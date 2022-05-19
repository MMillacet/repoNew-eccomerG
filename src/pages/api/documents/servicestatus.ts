import type { NextApiRequest, NextApiResponse } from 'next';
import goldfarbApi from '../../../api/goldfarb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const docNum = req.query.docNum as string;

    try {
        const result = await goldfarbApi.getServiceStatus(docNum);
        res.status(200).json(result);
    } catch (error) {
        res.status(200).json('No encontrado');
    }
};
