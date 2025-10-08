const router = require('express').Router();
const productsRouter = require('./products.router');
const clientesRouter = require('./clientes.router');
const categoriaRouter = require('./categoria.router');

function routerApi(app) {
    app.use('/products', productsRouter);
    app.use('/clientes', clientesRouter);
    app.use('/categoria', categoriaRouter);
}

module.exports = routerApi;