// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const externalLink = 'https://siddhesh0907.github.io/Portfolio/'; // Your portfolio URL

  return (
    <>
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
          <p>
            &copy; 2023{' '}
            <Link
              to={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white', textDecoration: 'none' }} // Add this style for white color
            >
              Siddhesh
            </Link>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
