// ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './Data';
import './ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p className="description">Description: {product.description}</p>
      <p className="price">Price: ₹{product.price}</p>
      <p className="category">Category: {product.category}</p>
      <p className="weight">Weight: {product.weight} kg</p>
      <p className="size">Size: {product.size}</p>
      <p className="texture">Texture: {product.texture}</p>
    </div>
  );
};

export default ProductPage;
