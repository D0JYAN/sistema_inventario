//onfigurar MySQL2
const mysql = require('mysql2');

//Configurar la conexion a la bd
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'bdinventarios'
});

//Conectar a la bd
connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base datos');
});

module.exports = connection;