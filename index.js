const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bienvenido Camilo ');
});

app.get('/saludos',(req, res) =>{
    const mensajes = [
        'Hola CAMILO bienvenido aqui',
        'que tengas un buen dia',
        'podemos mejorar cada dia con practica0',
        'aprendamos juntos con node.js EXPRESS'
    ];
    res.send(mensajes)
});

app.listen(port, () => {
    console.log('puerto para escuchar para desarrollo http://localhost:${port}');
});
