// HomeProductGrid.js
import React from 'react';
import ProductCard from './ProductCard';
import "./HomeProductGrid.css";

const HomeProductGrid = ({ products }) => {
  // Display only the first 8 products (2 rows of 4 products each)
  const homeProducts = products.slice(0, 8);

  return (
    <div className="home-product-grid">
      {homeProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeProductGrid;
