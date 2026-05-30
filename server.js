var app = require('./index');

var server = app.listen(4000, function () {
    console.log('rodando');
});

module.exports = server;
