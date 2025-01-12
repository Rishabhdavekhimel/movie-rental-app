const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Movie = sequelize.define('Movie', {
  title: { type: DataTypes.STRING, allowNull: false },
  genre: { type: DataTypes.STRING, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
  rentalFee: { type: DataTypes.FLOAT, allowNull: false },
});

module.exports = Movie;
