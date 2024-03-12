import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} className="z-0 w-[85%] mx-auto">
      {images.map((image, index) => (
        <div key={index}>
          <img className="object-contain h-auto" src={image} alt="" />
        </div>
      ))}
    </Slider>
  );
}

export default ProductSlider;
