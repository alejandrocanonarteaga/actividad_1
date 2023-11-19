// models/proyectoModel.js
const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
  numero: {
    type: String,
    unique: true,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaEntrega: {
    type: Date,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now,
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true,
  },
  tipoProyecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TipoProyecto',
    required: true,
  },
  universidad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Universidad',
    required: true,
  },
  etapaProyecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Etapas',
    required: true,
  },
});

module.exports = mongoose.model('Proyecto', proyectoSchema);
