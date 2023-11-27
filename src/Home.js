import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import { products } from "./Data";
import HomeProductGrid from "./HomeProductGrid";
import Navbar from "./Navbar";

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

      <div className="Poster"></div>
    </>
  );
}
