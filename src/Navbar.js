// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header id="navbar" className={showMenu ? 'active' : ''}>
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src="urbanaura1.jpg" alt="UrbanAura Logo" />
        </Link>
      </div>
      <div className={`menu-container ${showMenu ? 'show' : ''}`}>
        <ul className="menu">
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
          <li>
            {/* <Link to="/product-page">PRODUCT PAGE</Link> */}
          </li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
