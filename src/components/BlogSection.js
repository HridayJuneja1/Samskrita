import React from 'react';
import './BlogSection.css'; // Make sure to create a corresponding CSS file
import bookImage from '../assets/images/image3.png';
import libraryImage from '../assets/images/image3.png';
import balanceImage from '../assets/images/image3.png';

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h1>Check out our blog</h1>
      <p>Stay updated with SanskritLibrary.</p>
      <div className="blog-cards">
        <div className="card">
          <img src={bookImage} alt="The beauty of Sanskrit literature" />
          <h2>The beauty of Sanskrit literature.</h2>
          <p>Explore the depths of Sanskrit literature and immerse yourself in the intellectual richness.</p>
          <span>Sanskrit Scholar<br/>Author</span>
        </div>
        <div className="card">
          <img src={libraryImage} alt="Unlocking ancient wisdom" />
          <h2>Unlocking ancient wisdom.</h2>
          <p>Delve into the world of Sanskrit literature and uncover the ancient wisdom that lies within.</p>
          <span>Researcher<br/>Translator</span>
        </div>
        <div className="card">
          <img src={balanceImage} alt="Finding balance in texts" />
          <h2>Finding balance in texts.</h2>
          <p>Discover the harmony of work and leisure through the wisdom of Sanskrit texts.</p>
          <span>Yoga Practitioner<br/>Life Coach</span>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
