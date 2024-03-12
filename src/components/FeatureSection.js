import React from 'react';
import './FeatureSection.css'; // Make sure to create a corresponding CSS file
import featureImage from '../assets/images/image2.png'; // Replace with the path to your image

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="image-container">
        <img src={featureImage} alt="Feature" />
      </div>
      <div className="text-container">
        <div className="header">
          <h4>FEATURE</h4>
          <h2>Simple and user-friendly platform</h2>
        </div>
        <p>Explore a vast collection of Sanskrit books, manage your borrowing, and enhance your knowledge. Experience the joy of reading Sanskrit texts.</p>
        <button onClick={() => console.log('Navigating to learn more...')}>
          Learn more
        </button>
      </div>
    </div>
  );
}

export default FeatureSection;
