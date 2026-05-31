var express = require('express');
var helmet = require('helmet');
var cors = require('cors');
var rateLimit = require('express-rate-limit');

var app = express();

app.set('view engine', 'ejs');
app.set('trust proxy', 1);

app.use(helmet());

app.use(
    cors({
        origin: process.env.CORS_ORIGIN || '*',
        methods: ['GET'],
        allowedHeaders: ['Content-Type'],
        maxAge: 86400,
    })
);

var limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests, please try again later.' },
});
app.use(limiter);

app.disable('x-powered-by');

app.get('/', function (req, res) {
    res.render('index', { titulo: 'Funcionou' });
});

module.exports = app;
