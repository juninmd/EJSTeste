import express, { type Request, type Response } from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (_req: Request, res: Response) => {
  res.render('index', { titulo: 'Funcionou' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('rodando na porta ' + PORT);
});
