
const { Actor, Pelicula } = require('../models');

exports.getActores = async (req, res) => {
  const data = await Actor.findAll({
    include: { model: Pelicula, through: { attributes: [] } }
  });
  res.json(data);
};

exports.createActor = async (req, res) => {
  const actor = await Actor.create(req.body);
  res.json(actor);
};