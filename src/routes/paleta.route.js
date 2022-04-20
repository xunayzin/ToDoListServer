const express = require('express');
const router = express.Router();

const paletasController = require('../controllers/paleta.controller');

router.get('/find-paletas', paletasController.findAllPaletasController);
router.get('/paleta/:id', paletasController.findPaletaByIdController);
router.post('/create', paletasController.createPaletaController);
router.put('/update/:id', paletasController.updatePaletaController);
router.delete('/delete/:id', paletasController.deletePaletaController);

module.exports = router;
