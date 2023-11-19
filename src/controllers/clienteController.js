// controllers/clienteController.js
const Cliente = require('../models/clienteModel');

// Obtener todos los clientes
exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un cliente por ID
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
  const nuevoCliente = new Cliente(req.body);
  try {
    const clienteCreado = await nuevoCliente.save();
    res.status(201).json(clienteCreado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un cliente por ID
exports.updateCliente = async (req, res) => {
  try {
    const clienteActualizado = await Cliente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(clienteActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un cliente por ID
exports.deleteCliente = async (req, res) => {
  try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({ message: 'Cliente eliminado exitosamente.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
