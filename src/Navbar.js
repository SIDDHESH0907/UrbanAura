// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Navbar.css";


const Navbar = () => {
  return (
    <header id="navbar">
      <img className="logo" src="urbanaura1.jpg" alt="UrbanAura Logo" />
      <ul className="menu">
        <li>
          <Link to="categories">CATEGORIES</Link>
        </li>
        <li>
          <Link to="contact">PRODUCT PAGE</Link>
        </li>
        <li>
          <Link to="contact">
            <FontAwesomeIcon icon="shopping-cart" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
