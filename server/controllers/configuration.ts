import { Request, Response, RequestHandler } from 'express';
import configurationApi from '../api/configuration';

const exchangeRate: RequestHandler = async (req: Request, res: Response) => {
    try {
        const response = await configurationApi.exchangeRate();
        res.send(response.data);
    } catch (error: any) {
        res.status(400).send({
            reason: 'Ha ocurrido un error al conectarse a Goldfarb',
            description: error.message,
        });
    }
};

const minTransportCharge: RequestHandler = async (req: Request, res: Response) => {
    try {
        const response = await configurationApi.minTransportCharge();
        res.send(response.data);
    } catch (error: any) {
        res.status(400).send({
            reason: 'Ha ocurrido un error al conectarse a Goldfarb',
            description: error.message,
        });
    }
};

export default { exchangeRate, minTransportCharge };
