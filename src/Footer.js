// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-options">
        <Link to="/">About</Link>
        <Link to="/">Store Locator</Link>
        <Link to="/">FAQs</Link>
        <Link to="/">News</Link>
        <Link to="/">Careers</Link>
        <Link to="/">Contact Us</Link>
      </div>
      <div className="rights">
      <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
