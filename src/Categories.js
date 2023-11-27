import React from "react";
import ProductGrid from './ProductGrid'; // Import the ProductGrid component
import {products } from "./Data";
import Navbar from './Navbar'; // Import the Navbar component



export default function About() {
  return (
    <>
<Navbar />
    <div>
        <ProductGrid products={products} />
      </div>
    </>
  );
}



