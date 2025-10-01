const router = require('express').Router();
const productsRouter = require('./products.router');
const clientesRouter = require('./clientes.router');

function routerApi(app) {
    app.use('/products', productsRouter);
    app.use('/clientes', clientesRouter);
}

module.exports = routerApi;