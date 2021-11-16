import { Request, Response, RequestHandler } from 'express';
import productsApi from '../api/products';

const latest: RequestHandler = async (req: Request, res: Response) => {
    try {
        const response = await productsApi.latest();
        console.log(response);
        res.send(response.data);
    } catch (error: any) {
        res.status(400).send({
            reason: 'Ha ocurrido un error al conectarse a Goldfarb',
            description: error.message,
        });
    }
};

const lookup: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { itemcode, cardcode } = req.body;

        const response = await productsApi.lookup([itemcode], cardcode);

        res.send(response.data);
    } catch (error: any) {
        res.status(400).send({
            reason: 'Ha ocurrido un error al conectarse a Goldfarb',
            description: error.message,
        });
    }
};

const search: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { options } = req.body;
        const response = await productsApi.search(options)
        res.send(response.data);
    } catch (error: any) {
        res.status(400).send({
            reason: 'Ha ocurrido un error al conectarse a Goldfarb',
            description: error.message,
        });
    }
};



export default { latest, lookup, search };
