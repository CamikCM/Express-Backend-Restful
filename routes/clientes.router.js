const express = require('express');
const router =  require('express');
const {faker} = require('@faker-js/faker');
const e = require('express');

 app.get('/clientes', (req, res) => {
    const {limit, offset} = req.query;
    if (limit && offset) {
        res.send(`Listado de clientes con limit: ${limit} y offset: ${offset}`);
    } else {
        res.json('Listado de clientes');
    }

})