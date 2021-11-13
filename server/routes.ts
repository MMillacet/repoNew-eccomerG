import express, { Request, Response } from 'express';
import products from './controllers/products';
import documents from './controllers/documents';
import orders from './controllers/orders';
import configuration from './controllers/configuration';

const router = express.Router();

const routes = () => {
    router.get('/test', (req: Request, res: Response) => {
        res.send('Hello World');
    });

    router.get('/products/latest', products.latest);
    router.post('/products/lookup', products.lookup);
    router.post('/products/search', products.search);

    // require login
    router.get('/documents/invoice/:docNum', documents.invoice);
    router.get('/documents/invoiceReturn/:docNum', documents.invoiceReturn);
    router.get('/documents/recipe/:docNum', documents.recipe);

    // require login
    router.post('/orders/create', orders.create);

    router.get('/config/exchangeRate', configuration.exchangeRate);
    router.get('/config/minTransportCharge', configuration.minTransportCharge);

    return router;
};

export default routes;
