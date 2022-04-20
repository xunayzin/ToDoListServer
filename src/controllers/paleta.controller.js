const paletasService = require('../services/paleta.service');

const findAllPaletasController = (req, res) => {
  const paletas = paletasService.findAllPaletasService();

  res.send(paletas);
};

const findPaletaByIdController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenPaleta = paletasService.findPaletaByIdService(idParam);
  res.send(chosenPaleta);
};

const createPaletaController = (req, res) => {
  const paleta = req.body;
  const newPaleta = paletasService.createPaletaService(paleta);
  res.send(newPaleta);
};

const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  const paletaEdit = req.body;
  const updatePaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatePaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = req.params.id;
  paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
