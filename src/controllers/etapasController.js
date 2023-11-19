// controllers/etapasController.js
const Etapa = require('../models/etapasModel');

// Obtener todas las etapas
exports.getAllEtapas = async (req, res) => {
  try {
    const etapas = await Etapa.find();
    res.json(etapas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva etapa
exports.createEtapa = async (req, res) => {
  const nuevaEtapa = new Etapa(req.body);

  try {
    const etapa = await nuevaEtapa.save();
    res.status(201).json(etapa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una etapa
exports.updateEtapa = async (req, res) => {
  try {
    await Etapa.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Etapa actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una etapa
exports.deleteEtapa = async (req, res) => {
  try {
    await Etapa.findByIdAndDelete(req.params.id);
    res.json({ message: 'Etapa eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
