//Importacion del archivo de la conexion a la base de datos
const connection = require('../models/database');

//Creacion de las consultas
    //SELECT
    exports.productoById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_producto } = req.params;

        //Se crea la consulta SQL
        const query = 'SELECT * FROM `productos` WHERE id_producto=?;';

        //Ejecutar la consulta
        connection.query(query, [id_producto], (err, results) => {
            if (err) throw err;
            res.json({
                message: "Aquí Esta El Producto Del ID Especificado:",
                data: results
            });
        });
    }

    //INSERT INTO
    exports.register = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { nombre, cantidad, precio } = req.body;

        //Se crea la consulta SQL
        const query = 'INSERT INTO `productos` (nombre, cantidad, precio) VALUE (?,?,?);';

        //Ejecutar la consulta
        connection.query(query, [nombre, cantidad, precio], (err, results) => {
            if (err) throw err;
            res.json({
                message: "Producto Registrado Exitosamente",
                data: results
            });
        });
    }

    //UPDATE
    exports.updateById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_producto } = req.params;
        const { nombre, cantidad, precio } = req.body;

        //Se crea la consulta SQL
        const query = 'UPDATE `productos` SET nombre=?, cantidad=?, precio=? WHERE id_producto=?;';

        //Ejecutar la consulta
        connection.query(query, [nombre, cantidad, precio, id_producto], (err, results) => {
            if (err) throw err;
            res.json({
                message: "La Actualizacion Del Producto Fue Exitosa",
                data: results
            });
        });
    }

    //DELETE
    exports.deleteById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_producto } = req.params;

        //Se crea la consulta SQL
        const query = 'DELETE FROM `productos` WHERE id_producto=?;';

        //Ejecutar la consulta
        connection.query(query, [id_producto], (err, results) => {
            if (err) throw err;
            res.json({
                message: "El Producto Fue Eliminado Exitosamente",
                data: results
            });
        });
    }