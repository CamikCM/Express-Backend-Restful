const { faker } = require('@faker-js/faker');
const  express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const size = req.query.size || 5;
    const limit = size
    const categorias = [];
    for (let i = 0; i < limit ; i++) {
        categorias.push({
            name: faker.commerce.department(),
            description: faker.commerce.productDescription(),
        });
    }
    res.json(categorias);
    } );

router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.send ([{
        id,
        name: 'categoria 1',
        description: 'descripcion de la categoria 1'},

    ]);
});

router.post('/', (req, res) => {
    const body = req.body;
    res.json ({
        message: 'Categoria creada con éxito',
        data: body
    });
});
    
module.exports = router;