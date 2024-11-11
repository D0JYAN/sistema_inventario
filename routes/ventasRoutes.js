//Configurar express
const express = require('express');

//Configurar las rutas
const router = express.Router();

//Importar el controlador
const ventasControllers = require('../controllers/ventasControllers');

//EndPoints
    //GET
    router.get('/venta_by_id/:id_ventas', ventasControllers.ventaById);

    router.get('/venta_by_fecha/:fecha_ventas', ventasControllers.ventaByFecha);

    //POST
    router.post('/register_venta', ventasControllers.register);

    //PUT
    router.put('/update_venta/:id_ventas', ventasControllers.updateById);

    //DELETE
    router.delete('/delete_venta/:id_ventas', ventasControllers.deleteById);

module.exports = router;