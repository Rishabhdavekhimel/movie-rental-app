const express = require('express');
const sequelize = require('./db');
const movieRoutes = require('./routes/movies');

const app = express();
app.use(express.json());
app.use('/api/movies', movieRoutes);

// Synchronize the database
sequelize.sync({ force: false }) // Set to true if you want to recreate tables
  .then(() => console.log('Database synchronized'))
  .catch((err) => console.error('Error syncing database:', err));

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));
