import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from "react";
function HomeSlide() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides to show based on window width
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // Show one slide on smaller screens
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Show two slides on medium screens
      } else {
        setSlidesToShow(3); // Show three slides on larger screens
      }
    };

    // Initial adjustment when component mounts
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container w-[80%] mx-auto py-8 md:w-[95%]">
      <Slider {...settings}>
        <div>
          <div className="h-60 md:h-80">
            <img src="https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full w-full object-cover object-center" />
          </div>
        </div>
        <div>
          <div className="h-60 md:h-80">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full w-full object-cover object-center" />
          </div>
        </div>
        <div>
          <div className="h-60 md:h-80">
            <img src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full w-full object-cover object-center" />
          </div>
        </div>
        <div>
          <div className="h-60 md:h-80">
            <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full w-full object-cover object-center" />
          </div>
        </div>
        <div>
          <div className="h-60 md:h-80">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full w-full object-cover object-center" />
          </div>
        </div>
        <div>
          <div className="h-60 md:h-80">
            <img src="https://images.unsplash.com/photo-1524289286702-f07229da36f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full w-full object-cover object-center" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlide;
