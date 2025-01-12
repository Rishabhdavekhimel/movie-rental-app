const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

// Add a new movie
router.post('/', async (req, res) => {
  const { title, genre, stock, rentalFee } = req.body;
  try {
    const movie = await Movie.create({ title, genre, stock, rentalFee });
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add movie' });
  }
});

module.exports = router;
