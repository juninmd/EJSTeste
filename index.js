require('dotenv').config();

var express = require('express');
var helmet = require('helmet');
var cors = require('cors');
var rateLimit = require('express-rate-limit');

var app = express();
var port = process.env.PORT || 4000;

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('trust proxy', 1);

app.set('view engine', 'ejs');

app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
}));

app.get('/', function (req, res) {
  res.render('index', { titulo: process.env.TITULO || 'Funcionou' });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor');
});

app.listen(port, function () {
  console.log('rodando na porta ' + port);
});
