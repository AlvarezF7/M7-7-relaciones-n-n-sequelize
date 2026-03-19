//Tabla pelicula
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');

const Pelicula = sequelize.define('Pelicula', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  anio: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'peliculas',
  timestamps: false
});

module.exports = Pelicula;