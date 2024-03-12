import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="cta-section">
        <h2>Start Your Journey</h2>
        <p>No Credit Card Required. Begin your 10-day free borrowing period now.</p>
        <div className="cta-buttons">
          <button onClick={() => console.log('Get Started')}>Get Started</button>
          <button onClick={() => console.log('Contact Support')}>Contact Support</button>
        </div>
      </div>
      <footer className="footer-links-section">
      <div className="footer-content">
        <div className="footer-links">
          <div className="link-column">
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="link-column">
            <h4>Legal</h4>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms and Conditions</a>
          </div>
          <div className="link-column">
            <h4>Help</h4>
            <a href="/shipping">Shipping and Delivery</a>
            <a href="/returns">Returns Policy</a>
          </div>
          <div className="link-column">
            <h4>Social</h4>
            <div className="social-links">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <InstagramIcon />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <FacebookIcon />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <TwitterIcon />
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © SanskritLibrary</p>
      </div>
      </footer>
    </div>
  );
}

export default Footer;
