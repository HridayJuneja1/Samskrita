import React from 'react';
import './Individual.css'; // Make sure to create a corresponding CSS file
import featureImage from '../assets/images/image4.png'; // Replace with the path to your image

const Individual = () => {
  return (
    <div className="feature-section">
      <div className="image-container">
        <img src={featureImage} alt="Feature" />
      </div>
      <div className="text-container">
        <div className="header">
          <h4>FEATURE</h4>
          <h2>Books for Every Reader</h2>
        </div>
        <p>Whether you are a sanskrit scholar or a beginner, we have a wide range of books to cater to your needs. Explore our collection and find the perfect book for you.</p>
        <button onClick={() => console.log('Navigating to learn more...')}>
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Individual;