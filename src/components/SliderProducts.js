import React, { useEffect } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import ProductLoader2 from "./loaders/ProductLoader2";
import useLocalData from "../customHooks/useLocalData";

export default function SliderProducts({ category }) {
  const { loading, error, data, getData } = useLocalData({
    loadOnMount: false,
    params: { searchFor: "category", q: category, limit: 10 },
  });
  useEffect(() => {
    if (category) getData();
  }, [category]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  if (!loading && data) {
    return (
      <div>
        <Slider {...settings}>
          {data.map((product) => {
            return (
              <div className="w-1/4 px-2" key={product.id}>
                <ProductCard product={product} key={product.id}></ProductCard>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
  return (
    <Slider {...settings}>
      <div className="w-1/2 sm:1/3 md:1/4 lg:1/5 inline px-2">
        <div className="rounded border border-gray-200">
          <ProductLoader2></ProductLoader2>
        </div>
      </div>
      <div className="w-1/2 sm:1/3 md:1/4 lg:1/5 inline px-2">
        <div className="rounded border border-gray-200">
          <ProductLoader2></ProductLoader2>
        </div>
      </div>
      <div className="w-1/2 sm:1/3 md:1/4 lg:1/5 inline px-2">
        <div className="rounded border border-gray-200">
          <ProductLoader2></ProductLoader2>
        </div>
      </div>
      <div className="w-1/2 sm:1/3 md:1/4 lg:1/5 inline px-2">
        <div className="rounded border border-gray-200">
          <ProductLoader2></ProductLoader2>
        </div>
      </div>
      <div className="w-1/2 sm:1/3 md:1/4 lg:1/5 inline px-2">
        <div className="rounded border border-gray-200">
          <ProductLoader2></ProductLoader2>
        </div>
      </div>
    </Slider>
  );
}
