const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
