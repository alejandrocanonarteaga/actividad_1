// controllers/proyectoController.js
const Proyecto = require('../models/proyectoModel');

// Obtener todos los proyectos
exports.getAllProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo proyecto
exports.createProyecto = async (req, res) => {
  const nuevoProyecto = new Proyecto(req.body);

  try {
    const proyecto = await nuevoProyecto.save();
    res.status(201).json(proyecto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un proyecto
exports.updateProyecto = async (req, res) => {
  try {
    await Proyecto.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Proyecto actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un proyecto
exports.deleteProyecto = async (req, res) => {
  try {
    await Proyecto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Proyecto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
