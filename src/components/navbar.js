import React, { useState, createRef } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ItemsCounter from "./ItemsCounter";
import useClickOutside from "../customHooks/useClickOutside";

export default function Navbar() {
  const toggleCart = () => {
    setshowCart(!showCart);
  };
  const cartRef = createRef();
  useClickOutside(cartRef, toggleCart);
  const [showCart, setshowCart] = useState(false);
  let cart = showCart ? <Cart ref={cartRef}></Cart> : null;
  return (
    <nav className="flex w-full bg-p-bgray md:h-16 h-24 fixed z-30 top-0">
      <div className="w-full max-w-screen-xl mx-auto px-6 flex items-center flex-wrap md:flex-no-wrap">
        <div className="md:w-1/4 xl:w-1/5 font-bold flex items-center justify-center w-full">
          <Link to="/">
            <i className="material-icons text-green-1">storefront</i>
            <span className="text-2xl text-green-1">GreenShop</span>
          </Link>
        </div>
        <div className="md:w-3/4 flex md:flex-grow-1 w-11/12  md:mx-0 mx-auto">
          <SearchBar></SearchBar>
          <div></div>
          <ul className="justify-around w-1/4 px-6 items-center hidden md:flex">
            <li>
              <button className="text-gray-400 inline">
                <i className="material-icons block">location_on</i>
              </button>
            </li>
            <li className="relative">
              <button
                id="cartBtn"
                className="relative text-gray-400 inline"
                onClick={() => {
                  toggleCart();
                }}
              >
                <i className="material-icons block">shopping_cart</i>
                <ItemsCounter></ItemsCounter>
              </button>
              {cart}
            </li>
            <li>
              <Link to="/" className="text-gray-400">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
