//Configurar express
const express = require('express');

//Configurar las rutas
const router = express.Router();

//Importar el controlador
const proveedoresControllers = require('../controllers/proveedoresControllers');

//EndPoints
    //Get
    router.get('/proveedores_by_id/:id_proveedor', proveedoresControllers.proveedorById);
    //POST
    router.post('/register_proveedor', proveedoresControllers.register);
    //PUT
    router.put('/update_proveedor/:id_proveedor', proveedoresControllers.updateById);
    //DELETE
    router.delete('/delete_proveedor/:id_proveedor', proveedoresControllers.deleteById);

module.exports = router;