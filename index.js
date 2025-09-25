const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let productos = [
    { id: 1, nombre: 'Laptop', precio: 1000 },
    { id: 2, nombre: 'Mouse', precio: 50 },
    { id: 3, nombre: 'Teclado', precio: 80 }
];

app.get('/productos', (req, res) => {
    res.json(productos);
});

app.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

app.post('/productos', (req, res) => {
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    
    productos.push(nuevoProducto);
    res.send('Producto creado exitosamente');
});

app.put('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    
    if (producto) {
        producto.nombre = req.body.nombre;
        producto.precio = req.body.precio;
        res.send('Producto actualizado');
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

app.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);
    
    if (index !== -1) {
        productos.splice(index, 1);
        res.send('Producto eliminado');
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

app.get('/', (req, res) => {
    res.send('Bienvenido Camilo ');
});

app.get('/saludos', (req, res) => {
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
