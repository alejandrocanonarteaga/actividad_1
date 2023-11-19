// routes/etapasRoutes.js
const express = require('express');
const router = express.Router();
const etapasController = require('../controllers/etapasController');

// Obtener todas las etapas
router.get('/', etapasController.getAllEtapas);

// Obtener una etapa por ID
router.get('/:id', etapasController.getEtapasById);

// Crear una nueva etapa
router.post('/', etapasController.createEtapa);

// Actualizar una etapa por ID
router.put('/:id', etapasController.updateEtapa);

// Eliminar una etapa por ID
router.delete('/:id', etapasController.deleteEtapa);

module.exports = router;
