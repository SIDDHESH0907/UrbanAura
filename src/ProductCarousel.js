// ProductCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductCarousel.css";
import { Link } from "react-router-dom";

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = React.useRef();

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="product-carousel-container">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-link">
              <div className="product-slide">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div>
                <h3 className="underline">{product.name}</h3>
              </div>
              <div>
                <p className="underline">₹ {product.price}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <div className="carousel-buttons">
        <button className="prev" onClick={handlePrev}>
          &lt;
        </button>
        <button className="next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </>
  );
};

export default ProductCarousel;
