import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/nuts.jpg";
import img2 from "../img/fruits.jpg";
import img3 from "../img/vegetables.jpg";
import img4 from "../img/grains.jpg";
import SliderImages from "../components/SliderImages";
import SliderProducts from "../components/SliderProducts";
export default function HomePage() {
  return (
    <>
      <div className="md:mt-16 mt-24">
        <SliderImages></SliderImages>
      </div>
      <div className="w-11/12 mx-auto mt-3">
        <div className="flex justify-between px-2 mb-2 ">
          <h1 className="text-2xl inline-block text-gray-700">
            Featured products
          </h1>
          <Link
            to="/search?q=fruits"
            className="text-gray-600 flex items-center"
          >
            View all
            <span className="material-icons">keyboard_arrow_right</span>
          </Link>
        </div>
        <SliderProducts category="fruits"></SliderProducts>
        <div className="mb-8">
          <h1 className="text-2xl px-2 text-gray-700 mb-2">Categories</h1>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
            <div
              className="h-32 bg-blue-300 rounded overflow-hidden"
              style={{
                background: "url(" + img3 + ")",
                backgroundSize: "100%",
              }}
            >
              <Link
                to="/search?q=vegetables"
                className="bg-gray-700 bg-opacity-50 hover:bg-opacity-25 transition duration-1000 ease-out h-full w-full flex justify-center items-center"
              >
                <h2 className="text-3xl text-green-1 font-bold">Vegetables</h2>
              </Link>
            </div>
            <div
              className="h-32 bg-blue-300 rounded overflow-hidden"
              style={{
                background: "url(" + img1 + ")",
                backgroundSize: "100%",
              }}
            >
              <Link
                to="/search?q=nuts"
                className="bg-gray-700 bg-opacity-50 hover:bg-opacity-25 transition duration-1000 ease-out h-full w-full flex justify-center items-center"
              >
                <h2 className="text-3xl text-green-1 font-bold">Nuts</h2>
              </Link>
            </div>
            <div
              className="h-32 bg-blue-300 rounded overflow-hidden"
              style={{
                background: "url(" + img2 + ")",
                backgroundSize: "100%",
              }}
            >
              <Link
                to="/search?q=fruits"
                className="bg-gray-700 bg-opacity-50 hover:bg-opacity-25 transition duration-1000 ease-out h-full w-full flex justify-center items-center"
              >
                <h2 className="text-3xl text-green-1 font-bold">Fruits</h2>
              </Link>
            </div>
            <div
              className="h-32 bg-blue-300 rounded overflow-hidden"
              style={{
                background: "url(" + img4 + ")",
                backgroundSize: "100%",
              }}
            >
              <Link
                to="/search?q=grains"
                className="bg-gray-700 bg-opacity-50 hover:bg-opacity-25 transition duration-1000 ease-out h-full w-full flex justify-center items-center"
              >
                <h2 className="text-3xl text-green-1 font-bold">Grains</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
