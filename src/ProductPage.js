// ProductPage.js
import React from "react";
import { useParams, Link } from "react-router-dom"; // Import Link
import { products } from "./Data";
import Navbar from "./Navbar";
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="product-details-container">
        <div className="product-div">
          <div className="product-left">
            <div className="big-img">
              <Link to="/" className="back-button">
                Back
              </Link>
              <img src={product.imageUrl} alt={product.name} />
            </div>
          </div>
          <div className="product-right">
            <div className="product-big-name">{product.name}</div>
            <div className="product-spec">
              <p className="product-para">Description: {product.description}</p>
              <p className="price">Price: ₹ {product.price}</p>
              <p className="price">Texture: {product.texture}</p>
              <p className="price">Weight: {product.weight}</p>
              <p className="price">Size: {product.size}</p>
            </div>
            <div className="product-quant">
              <p>Quantity: 1</p>
            </div>
            <div className="atc-buy">
              <button className="atc-btn">Add to Cart</button>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
