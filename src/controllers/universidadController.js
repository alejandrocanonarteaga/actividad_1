// controllers/universidadController.js
const Universidad = require('../models/universidadModel');

// Obtener todas las universidades
exports.getAllUniversidades = async (req, res) => {
  try {
    const universidades = await Universidad.find();
    res.json(universidades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva universidad
exports.createUniversidad = async (req, res) => {
  const nuevaUniversidad = new Universidad(req.body);

  try {
    const universidad = await nuevaUniversidad.save();
    res.status(201).json(universidad);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una universidad
exports.updateUniversidad = async (req, res) => {
  try {
    await Universidad.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Universidad actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una universidad
exports.deleteUniversidad = async (req, res) => {
  try {
    await Universidad.findByIdAndDelete(req.params.id);
    res.json({ message: 'Universidad eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
