import express, { type Request, type Response } from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (_req: Request, res: Response) => {
  res.render('index', { titulo: 'Funcionou' });
});

app.listen(4000, () => {
  console.log('rodando');
});
