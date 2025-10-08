const express = require('express');
const {faker} = require('@faker-js/faker');
const router = express.Router();
const e = require('express');

router.get('/', (req, res) => {
    const size = req.query.size || 10;
    const limit = size
    const productos = [];
    for (let i = 0; i < limit ; i++) {
        productos.push({
            name: faker.commerce.productName(),
            price: faker.commerce.price(),

        });
    }
    res.json(productos);
    } );

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const limite = 20;
    if (id > limite) {
        res.status(404).json({
            message: 'Producto no encontrado'
        });
    } else
    res.send ([{
        id,
        name: 'producto 1',
        price: 1000},

    ]);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Producto actualizado con éxito`);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Producto con ID ` + id + ` eliminado con éxito ` );
});

router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json ({
        message: 'Producto creado con éxito',
        data: body
    });
});



module.exports = router;