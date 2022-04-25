const Paleta = require('../models/Paleta');

const findAllPaletasService = async () => {
  const paletas = await Paleta.find();
  return paletas;
};

const findPaletaByIdService = async (id) => {
  const paleta = await Paleta.findById(id)
  return paletas.find((paleta) => paleta.id == id);
};

const createPaletaService = async (newPaleta) => {
  const paletaCriada = await Paleta.create(newPaleta)
  return paletaCriada;
};

const updatePaletaService = async (id, paletaEdited) => {
  const paletaUpdate = await Paleta.findByIdAndUpdate(id, paletaEdited)
  return paletaUpdate;
};

const deletePaletaService = async (id) => {
  return await Paleta.findByIdAndDelete(id);
};

module.exports = {
  findAllPaletasService,
  findPaletaByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
