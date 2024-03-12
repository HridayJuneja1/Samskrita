import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyBooks.css';

const MyBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="book-section">
      <h1>My Books</h1>
      <div className="book-container">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.image} alt={book.title} />
            <div className="book-details">
              <h2>{book.title}</h2>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
