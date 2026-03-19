const sequelize = require('../config/dataBase');
const { PeliculasActores, Pelicula, Actor } = require('../models');

exports.asignarActor = async (req, res) => {
  const { pelicula_id, actor_id } = req.body;

  try {
    await sequelize.transaction(async (t) => {

      const pelicula = await Pelicula.findByPk(pelicula_id, { transaction: t });
      const actor = await Actor.findByPk(actor_id, { transaction: t });

      if (!pelicula || !actor) {
        throw new Error('No existe');
      }

      await PeliculasActores.create(
        { pelicula_id, actor_id },
        { transaction: t }
      );
    });

    res.json({ mensaje: 'OK' });

  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};