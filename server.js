require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users'); // Ensure the path matches your project structure
const booksRouter = require('./routes/books');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connection established'))
  .catch((error) => console.error('MongoDB connection failed:', error.message));
// Routes
app.use('/api/users', usersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.use('/api/users', usersRouter);
app.use('/api', booksRouter);
