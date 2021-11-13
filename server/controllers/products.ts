import axios from 'axios';
import { Request, Response, RequestHandler } from 'express';
import api from '../api';

const latest: RequestHandler = async (req: Request, res: Response) => {
    try {
        const response = await axios(api.latestProducts());
        console.log(response);
        res.send(response.data);
    } catch (error: any) {
        res.status(400).send({ reason: 'Ha ocurrido un error al conectarse a Goldfarb', description: error.message });
    }
};

const lookup: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { itemcode, cardcode } = req.body;

        const axiosConfig = api.productLookup({
            itemcodes: [itemcode],
            cardcode,
        });

        const response = await axios(axiosConfig);
        console.log(response);
        res.send(response.data);
    } catch (error: any) {
        res.status(400).send({ reason: 'Ha ocurrido un error al conectarse a Goldfarb', description: error.message });
    }
};

const search: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { options } = req.body;

        const axiosConfig = options.outletFamily ? api.outlet(options.outletFamily) : api.productSearch(options);

        const response = await axios(axiosConfig);
        console.log(response);
        res.send(response.data);
    } catch (error: any) {
        res.status(400).send({ reason: 'Ha ocurrido un error al conectarse a Goldfarb', description: error.message });
    }
};

export default { latest, lookup, search };
