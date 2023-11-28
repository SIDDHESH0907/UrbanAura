// HomeProductGrid.js
import React from 'react';
import ProductCard from './ProductCard';
import "./HomeProductGrid.css";
import { Link } from "react-router-dom";

const HomeProductGrid = ({ products }) => {
  // Display only the first 8 products (2 rows of 4 products each)
  const homeProducts = products.slice(0, 8);

  return (
    <div className="home-product-grid">
      {homeProducts.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} className="product-link">
          {/* Wrap each product with a Link to navigate to individual product pages */}
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default HomeProductGrid;
