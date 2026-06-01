import express, { type Request, type Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

app.set('view engine', 'ejs');

if (process.env.TRUST_PROXY) {
    app.set('trust proxy', process.env.TRUST_PROXY === 'true' ? 1 : process.env.TRUST_PROXY);
}

app.use(helmet());

app.use(
    cors({
        origin: process.env.CORS_ORIGIN || false,
        methods: ['GET'],
        allowedHeaders: ['Content-Type'],
        maxAge: 86400,
    })
);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests, please try again later.' },
});
app.use(limiter);

app.disable('x-powered-by');

app.get('/', (_req: Request, res: Response) => {
    res.render('index', { titulo: 'Funcionou' });
});

export default app;
