//
const Pelicula = require('./pelicula');
const Actor = require('./actor');
const PeliculasActores = require('./peliculasActores');

Pelicula.belongsToMany(Actor, {
  through: PeliculasActores,
  foreignKey: 'pelicula_id'
});

Actor.belongsToMany(Pelicula, {
  through: PeliculasActores,
  foreignKey: 'actor_id'
});

module.exports = { Pelicula, Actor, PeliculasActores };