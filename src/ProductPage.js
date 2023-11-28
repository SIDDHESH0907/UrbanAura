// ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './Data'; // Assuming you have a products array

const ProductPage = () => {
  const { productId } = useParams(); // Get the product ID from the URL params

  // Find the product with the matching ID
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      {/* Add other details you want to display */}
    </div>
  );
};

export default ProductPage;
