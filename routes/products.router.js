const express = require('express');
const router =  require('express');
const {faker} = require('@faker-js/faker');
const e = require('express');

const router = express.Router();

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
  res.send(`Producto con ID  eliminado con éxito`);
});

router.post('/', (req, res) => {
    res.send ('metodo creado con post');
});



module.exports = router;