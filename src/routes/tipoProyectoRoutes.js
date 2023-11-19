// routes/tipoProyectoRoutes.js
const express = require('express');
const router = express.Router();
const tipoProyectoController = require('../controllers/tipoProyectoController');

// Rutas
router.get('/', tipoProyectoController.getAllTipoProyectos);
router.get('/:id', tipoProyectoController.getTipoProyectoById);
router.post('/', tipoProyectoController.createTipoProyecto);
router.put('/:id', tipoProyectoController.updateTipoProyecto);
router.delete('/:id', tipoProyectoController.deleteTipoProyecto);

module.exports = router;
