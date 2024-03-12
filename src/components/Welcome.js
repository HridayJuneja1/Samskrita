import React from 'react';
import './Welcome.css'; // Make sure to create a corresponding CSS file
import welcomeImage from '../assets/images/image.png'; // Replace with your image path

const Welcome = () => {
  return (
    <div className="welcome-section">
      <div className="text-container">
        <h1>Welcome to SanskritLibrary!</h1>
        <p>Discover the beauty of Sanskrit literature.</p>
        <button onClick={() => console.log('Navigating to browse...')}>
          Start browsing
        </button>
      </div>
      <div className="image-container">
        <img src={welcomeImage} alt="Decorative" />
      </div>
    </div>
  );
}

export default Welcome;
