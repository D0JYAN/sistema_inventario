//Configurar express
const express = require('express');

//Configurar las rutas
const router = express.Router();

//Importar el controlador
const comprasControllers = require('../controllers/comprasControllers');

//EndPoints
    //Get
    router.get('/compra_by_id/:id_compra', comprasControllers.compraById);
    //POST
    router.post('/register_compra', comprasControllers.register);
    //PUT
    router.put('/update_compra/:id_compra', comprasControllers.updateById);
    //DELETE
    router.delete('/delete_compra/:id_compra', comprasControllers.deleteById);

module.exports = router;