// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rutas
app.use('/tipo-proyecto', require('./routes/tipoProyectoRoutes'));
app.use('/cliente', require('./routes/clienteRoutes'));
app.use('/universidad', require('./routes/universidadRoutes'));
app.use('/etapas', require('./routes/etapasRoutes'));
app.use('/proyecto', require('./routes/proyectoRoutes'));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
