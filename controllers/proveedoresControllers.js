//Importacion del archivo de la conexion a la base de datos
const connection = require('../models/database');

//Creacion de las consultas
    //SELECT
    exports.proveedorById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_proveedor } = req.params;

        //Se crea la consulta SQL
        const query = 'SELECT * FROM `proveedores` WHERE id_proveedor=?;';

        //Ejecutar la consulta
        connection.query(query, [id_proveedor], (err, results) => {
            if (err) throw err;
            res.json({
                message: "Aquí Esta El Proveedor Del ID Especificado:",
                data: results
            });
        });
    }

    //INSERT INTO
    exports.register = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { nombre, telefono } = req.body;

        //Se crea la consulta SQL
        const query = 'INSERT INTO `proveedores` (nombre, telefono) VALUE (?,?);';

        //Ejecutar la consulta
        connection.query(query, [nombre, telefono], (err, results) => {
            if (err) throw err;
            res.json({
                message: "Proveedor Registrado Exitosamente",
                data: results
            });
        });
    }

    //UPDATE
    exports.updateById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_proveedor } = req.params;
        const { nombre, telefono } = req.body;

        //Se crea la consulta SQL
        const query = 'UPDATE `proveedores` SET nombre=?, telefono=? WHERE id_proveedor=?;';

        //Ejecutar la consulta
        connection.query(query, [nombre, telefono, id_proveedor], (err, results) => {
            if (err) throw err;
            res.json({
                message: "La Actualizacion Del Proveedor Fue Exitosa",
                data: results
            });
        });
    }

    //DELETE
    exports.deleteById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_proveedor } = req.params;

        //Se crea la consulta SQL
        const query = 'DELETE FROM `proveedores` WHERE id_proveedor=?;';

        //Ejecutar la consulta
        connection.query(query, [id_proveedor], (err, results) => {
            if (err) throw err;
            res.json({
                message: "El Proveedor Fue Eliminado Exitosamente",
                data: results
            });
        });
    }