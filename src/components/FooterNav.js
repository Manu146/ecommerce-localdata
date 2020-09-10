import React from "react";
import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <div className="h-12 bg-indigo-900 fixed bottom-0 w-full bg-p-bgray flex flex-no-wrap md:hidden">
      <Link
        to="/mycart"
        className="w-1/4 text-gray-400 py-3 block text-center border border-gray-500"
      >
        <i className="material-icons">shopping_cart</i>
      </Link>
      <Link className="w-1/4 text-gray-400 py-3 block text-center border border-gray-500"></Link>
      <Link className="w-1/4 text-gray-400 py-3 block text-center border border-gray-500"></Link>
      <Link className="w-1/4 text-gray-400 py-3 block text-center border border-gray-500"></Link>
    </div>
  );
}
