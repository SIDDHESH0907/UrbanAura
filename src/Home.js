import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import { products } from "./Data";
import HomeProductGrid from "./HomeProductGrid";
import Navbar from "./Navbar";
import ProductCarousel from "./ProductCarousel"; // Adjust the path as needed
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="container">
        <div className="Live-Comfortably">Live Comfortably</div>
        <div className="Skincare">Skincare</div>
        <div className="Kitchen">Kitchen</div>
        <div className="Electronics">Electronics</div>
      </div>

      <div className="min-products">
        <h1 className="title">Products we are proud of</h1>
        <HomeProductGrid products={products} />
      </div>

      <div className="poster-container">
        <div className="poster-child">
          <div className="left1">
            <p className="poster-heading">Creative harmonious living</p>
            <p className="poster-para">
              RAOUF Products are all made to standard sizes so that you can mix
              and match them freely.
            </p>
            <button className="poster-btn">SHOP NOW</button>
          </div>
        </div>
        <div className="poster-child">
          <div className="right1"></div>
        </div>
      </div>

      <h1 className="carosel-title">Trending Now</h1>
      <ProductCarousel products={products} />

      <div className="poster-container">
        <div className="poster-child">
          <div className="left2"></div>
        </div>
        <div className="poster-child">
          <div className="right2">
            <p className="poster-heading">Creative harmonious living</p>
            <p className="poster-para">
              RAOUF Products are all made to standard sizes so that you can mix
              and match them freely.
            </p>
            <button className="poster-btn">SHOP NOW</button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
