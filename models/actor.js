// tabla actores define estructura validaciones y relaciones.

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');

const Actor = sequelize.define('Actor', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  fecha_nacimiento: { type: DataTypes.DATEONLY, allowNull: false }
}, {
  tableName: 'actores',
  timestamps: false
});

module.exports = Actor;