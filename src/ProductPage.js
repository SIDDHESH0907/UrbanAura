// ProductPage.js
import React , { useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link
import { products } from "./Data";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ProductPage.css";
import ProductCarousel from "./ProductCarousel"; // Adjust the path as needed

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [productId]); // Trigger the effect when productId changes

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

      <div className="carosel-productpage">
        <h1 className="carosel-title">Trending Now</h1>
        <ProductCarousel products={products} />
      </div>

      <Footer/>
    </>
  );
};

export default ProductPage;
