import express, { Request, Response } from 'express';

const router = express.Router();

const routes = () => {
    router.get('/test', (req: Request, res: Response) => {
        res.send('Hello World');
    });

    return router;
};

export default routes;
