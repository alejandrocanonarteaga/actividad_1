// controllers/tipoProyectoController.js
const TipoProyecto = require('../models/tipoProyectoModel');

// Obtener todos los tipos de proyecto
exports.getAllTiposProyecto = async (req, res) => {
  try {
    const tiposProyecto = await TipoProyecto.find();
    res.json(tiposProyecto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un tipo de proyecto por ID
exports.getTipoProyectoById = async (req, res) => {
  try {
    const tipoProyecto = await TipoProyecto.findById(req.params.id);
    if (tipoProyecto) {
      res.json(tipoProyecto);
    } else {
      res.status(404).json({ message: 'Tipo de proyecto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo tipo de proyecto
exports.createTipoProyecto = async (req, res) => {
  const tipoProyecto = new TipoProyecto({
    nombre: req.body.nombre,
  });

  try {
    const nuevoTipoProyecto = await tipoProyecto.save();
    res.status(201).json(nuevoTipoProyecto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un tipo de proyecto por ID
exports.updateTipoProyecto = async (req, res) => {
  try {
    const tipoProyecto = await TipoProyecto.findById(req.params.id);

    if (tipoProyecto) {
      tipoProyecto.nombre = req.body.nombre || tipoProyecto.nombre;

      const tipoProyectoActualizado = await tipoProyecto.save();
      res.json(tipoProyectoActualizado);
    } else {
      res.status(404).json({ message: 'Tipo de proyecto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un tipo de proyecto por ID
exports.deleteTipoProyecto = async (req, res) => {
  try {
    const tipoProyecto = await TipoProyecto.findById(req.params.id);

    if (tipoProyecto) {
      await tipoProyecto.remove();
      res.json({ message: 'Tipo de proyecto eliminado' });
    } else {
      res.status(404).json({ message: 'Tipo de proyecto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
