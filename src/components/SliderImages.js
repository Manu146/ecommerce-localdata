import React from "react";
import Slider from "react-slick";
import img1 from "../img/pseudobanner52.jpg";
import img2 from "../img/pseudobanner62.jpg";
import img3 from "../img/pseudobanner7.jpg";

export default function SliderImages() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt="" className="w-full" />
      </div>
      <div>
        <img src={img2} alt="" className="w-full" />
      </div>
      <div>
        <img src={img3} alt="" className="w-full" />
      </div>
    </Slider>
  );
}
