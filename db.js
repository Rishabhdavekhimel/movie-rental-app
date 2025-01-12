const { Sequelize } = require('sequelize');
require('dotenv').config(); // Make sure to load your environment variables

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: false, // Make sure you don't require SSL unless you need it
    },
  }
);

sequelize.authenticate()
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Database connection error:', err));

module.exports = sequelize;
