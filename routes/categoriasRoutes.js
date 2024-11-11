//Configurar express
const express = require('express');

//Configurar las rutas
const router = express.Router();

//Importar el controlador
const categoriasControllers = require('../controllers/categoriasControllers');

//EndPoints
    //Get
    router.get('/categoria_by_id/:id_categoria', categoriasControllers.categoriaById);
    //POST
    router.post('/register_categoria', categoriasControllers.register);
    //PUT
    router.put('/update_categoria/:id_categoria', categoriasControllers.updateById);
    //DELETE
    router.delete('/delete_categoria/:id_categoria', categoriasControllers.deleteById);

module.exports = router;