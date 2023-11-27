// ProductCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductCarousel.css';

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <div className="product-carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-slide">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>
          </div>
        ))}
      </Slider>
      <div className="carousel-buttons">
    </div>
        <button className="prev" onClick={handlePrev}>&lt;</button>
        <button className="next" onClick={handleNext}>&gt;</button>
      </div>
  );
};

export default ProductCarousel;
