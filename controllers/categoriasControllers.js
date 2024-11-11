//Importacion del archivo de la conexion a la base de datos
const connection = require('../models/database');

//Creacion de las consultas
    //SELECT
    exports.categoriaById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_categoria } = req.params;

        //Se crea la consulta SQL
        const query = 'SELECT * FROM `categorias` WHERE id_categoria=?;';

        //Ejecutar la consulta
        connection.query(query, [id_categoria], (err, results) => {
            if (err) throw err;
            res.json({
                message: "Aquí Esta La Categoria Del ID Especificado:",
                data: results
            });
        });
    }

    //INSERT INTO
    exports.register = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { nombre, cantidad } = req.body;

        //Se crea la consulta SQL
        const query = 'INSERT INTO `categorias` (nombre, cantidad) VALUE (?,?);';

        //Ejecutar la consulta
        connection.query(query, [nombre, cantidad], (err, results) => {
            if (err) throw err;
            res.json({
                message: "Categoria Registrada Exitosamente",
                data: results
            });
        });
    }

    //UPDATE
    exports.updateById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_categoria } = req.params;
        const { nombre, cantidad } = req.body;

        //Se crea la consulta SQL
        const query = 'UPDATE `categorias` SET nombre=?, cantidad=? WHERE id_categoria=?;';

        //Ejecutar la consulta
        connection.query(query, [nombre, cantidad, id_categoria], (err, results) => {
            if (err) throw err;
            res.json({
                message: "La Actualizacion De La Categoria Fue Exitosa",
                data: results
            });
        });
    }

    //DELETE
    exports.deleteById = (req, res) => {
        //Se pasan los datos necesarios para la consulta.
        const { id_categoria } = req.params;

        //Se crea la consulta SQL
        const query = 'DELETE FROM `categorias` WHERE id_categoria=?;';

        //Ejecutar la consulta
        connection.query(query, [id_categoria], (err, results) => {
            if (err) throw err;
            res.json({
                message: "La Categoria Fue Eliminada Exitosamente",
                data: results
            });
        });       
    }