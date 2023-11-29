import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import { products } from "./Data";
import HomeProductGrid from "./HomeProductGrid";
import Navbar from "./Navbar";
import ProductCarousel from "./ProductCarousel"; // Adjust the path as needed
import Footer from "./Footer";
import Poster1 from "./Poster1";
import Poster2 from "./Poster2";

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

      <Poster1></Poster1>

      <h1 className="carosel-title">Trending Now</h1>
      <ProductCarousel products={products} />

      <Poster2></Poster2>

      <Footer/>
    </>
  );
}
