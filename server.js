//Configurar express
const express = require('express');

//Configurar body-parser
const bodyParser = require('body-parser');

//Configurar el manejo de las rutas y levantamiento de servicios
const app = express();

//Importar el modulo de morgan
const morgan = require('morgan');

//Importar las rutas de las API
const ventasRoutes = require('./routes/ventasRoutes');
const productosRoutes = require('./routes/productosRoutes');
const proveedoresRoutes = require('./routes/proveedoresRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const comprasRoutes = require('./routes/comprasRoutes');

//Creacion de los middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());//Establecer el formato de los datos
app.use('/ventas', ventasRoutes);
app.use('/productos', productosRoutes);
app.use('/proveedores', proveedoresRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/compras', comprasRoutes);

//Levantar el servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});