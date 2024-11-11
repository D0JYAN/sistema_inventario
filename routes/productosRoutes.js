//Configurar express
const express = require('express');

//Configurar las rutas
const router = express.Router();

//Importar el controlador
const productosControllers = require('../controllers/productosControllers');

//EndPoints
    //Get
    router.get('/producto_by_id/:id_producto', productosControllers.productoById);
    //POST
    router.post('/register_producto', productosControllers.register);
    //PUT
    router.put('/update_producto/:id_producto', productosControllers.updateById);
    //DELETE
    router.delete('/delete_producto/:id_producto', productosControllers.deleteById);

module.exports = router;