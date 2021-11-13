import axios from 'axios';
import { Request, Response, RequestHandler } from 'express';
import api from '../api';

const exchangeRate: RequestHandler = async (req: Request, res: Response) => {
    try {
        const response = await axios(api.exchangeRate());
        console.log(response);
        res.send(response.data);
    } catch (error: any) {
        res.status(400).send({ reason: 'Ha ocurrido un error al conectarse a Goldfarb', description: error.message });
    }
};

const minTransportCharge: RequestHandler = async (req: Request, res: Response) => {
    try {
        const response = await axios(api.minTransportCharge());
        console.log(response);
        res.send(response.data);
    } catch (error: any) {
        res.status(400).send({ reason: 'Ha ocurrido un error al conectarse a Goldfarb', description: error.message });
    }
};

export default { exchangeRate, minTransportCharge };
