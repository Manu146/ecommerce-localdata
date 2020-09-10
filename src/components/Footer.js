import React from "react";
import { Link } from "react-router-dom";
import ItemsCounter from "./ItemsCounter";

function Footer({ setshowmCart, showmCart }) {
  const toogleCart = () => {
    setshowmCart(!showmCart);
  };
  return (
    <div className="h-12 bg-indigo-900 fixed bottom-0 w-full bg-p-bgray flex flex-no-wrap md:hidden z-20">
      <div className="w-1/4  text-center py-3">
        <button
          onFocus={() => {
            toogleCart();
          }}
          onBlur={() => {
            setshowmCart(!showmCart);
          }}
          className="text-gray-400 inline hover:text-gray-500 transition-colors ease-in duration-300 relative"
        >
          <i className="material-icons">shopping_cart</i>
          <ItemsCounter></ItemsCounter>
        </button>
      </div>
      <button className="w-1/4 text-gray-400 hover:text-gray-500 transition-colors ease-in duration-300 py-3 text-center ">
        <i className="material-icons">attach_money</i>
      </button>
      <button className="w-1/4 text-gray-400 hover:text-gray-500 transition-colors ease-in duration-300 py-3 text-center ">
        <i className="material-icons">location_on</i>
      </button>
      <Link
        to="/"
        className="w-1/4 text-gray-400 hover:text-gray-500 transition-colors ease-in duration-300 py-3 block text-center "
      >
        <i className="material-icons">person</i>
      </Link>
    </div>
  );
}

export default Footer;
