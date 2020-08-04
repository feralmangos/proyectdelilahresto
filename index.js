'use strict';

const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const sequelize = require('./db/db');
const colors = require('colors');
const path = require('path');
const PORT = process.env.PORT || 3000;

const {
    getProductos,
    getProductosId,
    updateProducto,
    deleteProducto,
    crearProducto
} = require('./routes/productos');

const {
    userLogin,
    userRegister,
    favoritos,
    crearFavoritos,
    getUsuarios,
    getUsuario
} = require('./routes/users');

const {
    getPedidos,
    crearPedido,
    updatePedidoEstado,
    getPedidosUser,
    deletePedido
} = require('./routes/pedidos');

//----------------MIDDLEWARES AND SERVER listen----------------//

const {
    userAdmin,
    userLogged,
} = require('./middlewares/middlewares')

server.use(bodyParser.json());
server.listen(PORT, () => console.log(`Server is on the port: ${PORT}`.inverse));

//------------------CRUD PRODUCTOS-------------------//

server.get('/productos', getProductos);
server.get('/productos/:id', userLogged, getProductosId);
server.post('/productos', userAdmin, crearProducto);
server.put('/productos/:id', userAdmin, updateProducto);
server.delete('/productos/:id', userAdmin, deleteProducto);

//------------------USERS-------------------//

server.post('/usuarios/login', userLogin);
server.post('/usuarios/register', userRegister);
server.get('/usuarios/favoritos', userLogged, favoritos);
server.post('/usuarios/favoritos', userLogged, crearFavoritos);
server.get('/usuarios', userAdmin, getUsuarios);
server.get('/usuarios/usuario', userLogged, getUsuario);

//------------------PEDIDOS-------------------//

server.get('/pedidos/user', userLogged, getPedidosUser);
server.get('/pedidos', userAdmin, getPedidos);
server.post('/pedidos/user', userLogged, crearPedido);
server.put('/pedidos/:id', userAdmin, updatePedidoEstado);
server.delete('/pedidos/:id', userAdmin, deletePedido);