import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
     <header>
            <div className="slider-container">
      <Slider {...settings}>
        <div className="container_slider">
          <img className="slider_img" src="./media/yoga1.jpeg" alt="img error"/>
        </div>
        <div className="container_slider">
          <img className="slider_img" src="./media/yoga2.jpeg" alt="img error"/>
        </div>
        <div className="container_slider">
          <img className="slider_img" src="./media/yoga3.jpeg" alt="img error"/>
        </div>
        <div className="container_slider">
          <img className="slider_img" src="./media/yoga4.jpeg" alt="img error"/>
        </div>
        <div className="container_slider">
          <img className="slider_img" src="./media/yoga6.jpeg" alt="img error"/>
        </div>
      </Slider>
    </div>
     </header>

  );
}

export default Responsive;
