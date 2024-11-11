//Importacion del archivo de la conexion a la base de datos
const connection = require('../models/database');

//Creacion de las consultas
    //SELECT
    exports.compraById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_compra } = req.params;

        //Se crea la consulta SQL
        const query = 'SELECT * FROM `compras` WHERE id_compra=?;';

        //Ejecutar la consulta
        connection.query(query, [id_compra], (err, results) => {
            if (err) throw err;
            res.json({
                message: "Aquí Esta La Compra Del ID Especificado:",
                data: results
            });
        });
    }

    //INSERT INTO
    exports.register = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { fecha_compra, total_compra, metodo_pago, nombre_comprador } = req.body;

        //Se crea la consulta SQL
        const query = 'INSERT INTO `compras` (fecha_compra, total_compra, metodo_pago, nombre_comprador) VALUE (?,?,?,?);';

        //Ejecutar la consulta
        connection.query(query, [fecha_compra, total_compra, metodo_pago, nombre_comprador], (err, results) => {
            if (err) throw err;
            res.json({
                message: "Compra Registrada Exitosamente",
                data: results
            });
        });
    }

    //UPDATE
    exports.updateById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_compra } = req.params;
        const { fecha_compra, total_compra, metodo_pago, nombre_comprador } = req.body;

        //Se crea la consulta SQL
        const query = 'UPDATE `compras` SET fecha_compra=?, total_compra=?, metodo_pago=?, nombre_comprador=? WHERE id_compra=?;';

        //Ejecutar la consulta
        connection.query(query, [fecha_compra, total_compra, metodo_pago, nombre_comprador, id_compra], (err, results) => {
            if (err) throw err;
            res.json({
                message: "La Actualizacion De La Compra Fue Exitosa",
                data: results
            });
        });
    }

    //DELETE
    exports.deleteById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_compra } = req.params;

        //Se crea la consulta SQL
        const query = 'DELETE FROM `compras` WHERE id_compra=?;';

        //Ejecutar la consulta
        connection.query(query, [id_compra], (err, results) => {
            if (err) throw err;
            res.json({
                message: "La Compra Fue Eliminada Exitosamente",
                data: results
            });
        });        
    }