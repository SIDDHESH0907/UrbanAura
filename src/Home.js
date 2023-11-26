import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import {products } from "./Data";
import ProductGrid from './ProductGrid'; // Import the ProductGrid component


export default function Home() {
  

  return (
    <>
      <div>
        <header id="navbar">
          <img class="logo" src="/urbanaura1.jpg" alt="UrbanAura Logo" />

          <ul className="menu">
            <li>
              <Link to="about">CATEGORIES</Link>
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

        <div class="container">
          <div class="Live-Comfortably">Live Comfortably</div>
          <div class="Skincare">Skincare</div>
          <div class="Kitchen">Kitchen</div>
          <div class="Electronics">Electronics</div>
        </div>
      </div>

      <div>
        {/* ... other components or sections ... */}
        <ProductGrid products={products} />
      </div>
    </>
  );
}
