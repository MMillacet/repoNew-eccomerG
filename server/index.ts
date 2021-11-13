import express, { Request, Response } from 'express';
import next from 'next';
import routes from './routes';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
    try {
        await app.prepare();
        const server = express();

        // /api/auth needs to be handled by nextjs
        server.get('/api/auth', (req: Request, res: Response) => handle(req, res));

        server.use('/api', routes());

        server.all('*', (req: Request, res: Response) => handle(req, res));

        server.listen(port, (err?: any) => {
            if (err) throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
