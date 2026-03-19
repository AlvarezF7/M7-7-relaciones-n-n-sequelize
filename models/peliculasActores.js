//Tabla intermedia? 
const sequelize = require('../config/dataBase');

const PeliculasActores = sequelize.define('PeliculasActores', {}, {
  tableName: 'peliculas_actores',
  timestamps: false
});

module.exports = PeliculasActores;