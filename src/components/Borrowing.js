import React from 'react';
import './Borrowing.css'; // Make sure to create a corresponding CSS file
import featureImage from '../assets/images/image3.png'; // Replace with the path to your image

const Borrowing = () => {
  return (
    <div className="feature-section">
      <div className="text-container">
        <div className="header">
          <h4>FEATURE</h4>
          <h2>Convenient Borrowing Process</h2>
        </div>
        <p>Borrow books hassle-free with out intuitive platform. Enjoy a seamless expereince and immerse yourself in the world of Sanskrit literature.</p>
        <button onClick={() => console.log('Navigating to learn more...')}>
          Learn more
        </button>
      </div>
      <div className="image-container">
        <img src={featureImage} alt="Feature" />
      </div>
    </div>
  );
}

export default Borrowing;
