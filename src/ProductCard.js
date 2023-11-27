// ProductCard.js
import React from 'react';
import "./ProductCard.css";


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
    </div>
  );
};

export default ProductCard;
