const express = require('express');
const router = express.Router();
const Book = require('../models/Book'); // Adjust the path as necessary

router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).send('Error fetching books from the database');
  }
});

module.exports = router;
