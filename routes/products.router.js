const express = require('express');
const ProductsService = require('../service/products.service');
const service = new ProductsService();
const router = express.Router();

router.get('/', async(req, res) => {
    const products = await service.findAll();
    res.status(200).send (products);
    } );

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const products = await service.findOne(id);
    if (!products){
        res.status(404).json({
            message: 'producto no encontrado'
        })
    }else{
        res.status(200).json(products);
    }
});

router.patch('/:id', async (req, res) => {
    const { id } =req.params;
    const body = req.body;
    const producto = await service.update(id, body)
    res.status(200).json(producto);
});

router.post('/', async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

router.delete('/:id', async(req, res) => {
    const { id } =req.params;
    const respuesta = await service.delete(id);
    res.json(respuesta);
});

module.exports = router;