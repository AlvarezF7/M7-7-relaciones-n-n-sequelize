//logica
const { Pelicula, Actor } = require('../models');

exports.getPeliculas = async (req, res) => {
  const data = await Pelicula.findAll({
    include: { model: Actor, through: { attributes: [] } }
  });
  res.json(data);
};

exports.createPelicula = async (req, res) => {
  const { titulo, anio } = req.body;
  const pelicula = await Pelicula.create({ titulo, anio });
  res.json(pelicula);
};

exports.deletePelicula = async (req, res) => {
  try {
    const { id } = req.params;
    await Pelicula.destroy({
      where: { id }
    });
    res.json({ mensaje: 'Película eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};