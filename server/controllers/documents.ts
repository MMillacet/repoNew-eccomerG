import axios from 'axios';
import { Request, Response, RequestHandler } from 'express';
import api from '../api';

const invoice: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { cardcode, docNum } = req.query;

        if (typeof (docNum) !== 'string') {
            res.status(400).send('docNum is required');
        } else if (typeof (cardcode) !== 'string') {
            res.status(400).send('cardcode is required');
        } else {
            const response = await axios(api.invoice(docNum, cardcode));
            console.log(response);
            res.send(response.data);
        }
    } catch (error: any) {
        res.status(400).send({ reason: 'Ha ocurrido un error al conectarse a Goldfarb', description: error.message });
    }
};

const invoiceReturn: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { cardcode, docNum } = req.query;

        if (typeof (docNum) !== 'string') {
            res.status(400).send('docNum is required');
        } else if (typeof (cardcode) !== 'string') {
            res.status(400).send('cardcode is required');
        } else {
            const response = await axios(api.invoiceReturn(docNum, cardcode));
            console.log(response);
            res.send(response.data);
        }
    } catch (error: any) {
        res.status(400).send({ reason: 'Ha ocurrido un error al conectarse a Goldfarb', description: error.message });
    }
};

const recipe: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { docNum } = req.query;

        if (typeof (docNum) !== 'string') {
            res.status(400).send('docNum is required');
        } else {
            const response = await axios(api.clientRecipe(docNum));
            console.log(response);
            res.send(response.data);
        }
    } catch (error: any) {
        res.status(400).send({ reason: 'Ha ocurrido un error al conectarse a Goldfarb', description: error.message });
    }
};

export default { invoice, invoiceReturn, recipe };
