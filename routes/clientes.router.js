const  express = require('express');
const router = express.Router();

router.get('/clientes', (req, res) => {
    const {limit, offset} = req.query;
    if (limit && offset) {
        res.send(`Listado de clientes con limit: ${limit} y offset: ${offset}`);
    } else {
        res.json('Listado de clientes');
    }

})

module.exports = router;