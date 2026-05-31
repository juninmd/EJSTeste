import express, { Express } from 'express';

const app: Express = express();

app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
    res.render('index', { titulo: 'Funcionou' });
});

export default app;
