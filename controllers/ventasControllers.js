//Importacion del archivo de la conexion a la base de datos
const connection = require('../models/database');

//Creacion de las consultas
    //SELECT
    exports.ventaById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_ventas } = req.params;

        //Se crea la consulta SQL
        const query = 'SELECT * FROM `ventas` WHERE id_ventas=?;';

        //Ejecutar la consulta
        connection.query(query, [id_ventas], (err, results) => {
            if (err) throw err;
            res.json({
                message: "Aquí Esta La Venta Del ID Especificado:",
                data: results
            });
        });
    }

    exports.ventaByFecha = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { fecha_ventas } = req.params;

        //Se crea la consulta SQL
        const query = 'SELECT * FROM `ventas` WHERE fecha_ventas=?;';

        //Ejecutar la consulta
        connection.query(query, [fecha_ventas], (err, results) => {
            if (err) throw err;
            res.json({
                message: "Aquí Esta La Venta Con La Fecha Especificada:",
                data: results
            });
        });
    }

    //INSERT INTO
    exports.register = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { fecha_ventas, hora_venta, total_venta, metodo_pago, impuesto } = req.body;

        //Se crea la consulta SQL
        const query = 'INSERT INTO `ventas` (fecha_ventas, hora_venta, total_venta, metodo_pago, impuesto) VALUE (?,?,?,?,?);';

        //Ejecutar la consulta
        connection.query(query, [fecha_ventas, hora_venta, total_venta, metodo_pago, impuesto], (err, results) => {
            if (err) throw err;
            res.json({
                message: "Registro Exitoso",
                data: results
            });
        });
    }

    //UPDATE
    exports.updateById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_ventas } = req.params;
        const { fecha_ventas, hora_venta, total_venta, metodo_pago, impuesto } = req.body;

        //Se crea la consulta SQL
        const query = 'UPDATE `ventas` SET fecha_ventas=?, hora_venta=?, total_venta=?, metodo_pago=?, impuesto=? WHERE id_ventas=?;';

        //Ejecutar la consulta
        connection.query(query, [fecha_ventas, hora_venta, total_venta, metodo_pago, impuesto, id_ventas], (err, results) => {
            if (err) throw err;
            res.json({
                message: "La Actualizacion De La Venta Fue Exitosa",
                data: results
            });
        });

    }

    //DELETE FROM
    exports.deleteById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_ventas } = req.params;

        //Se crea la consulta SQL
        const query = 'DELETE FROM `ventas` WHERE id_ventas=?;';

        //Ejecutar la consulta
        connection.query(query, [id_ventas], (err, results) => {
            if (err) throw err;
            res.json({
                message: "La Venta Fue Eliminada Exitosamente",
                data: results
            });
        });
    }