const express = require('express');
const {faker} = require('@faker-js/faker');
const routerApi = require('./routes');
const app = express();
const port = 3001;

app.use(express.json());
// app.get('/', (req, res) => {
//     res.send ('<h1>Hello World, I feel 😁!</h1>');
// });



//  app.get('/clientes', (req, res) => {
//     const {limit, offset} = req.query;
//     if (limit && offset) {
//         res.send(`Listado de clientes con limit: ${limit} y offset: ${offset}`);
//     } else {
//         res.json('Listado de clientes');
//     }

// })

routerApi(app);
app.listen(port, () => {
    console.log("Servidor is running on port " + port);
});