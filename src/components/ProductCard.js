import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div
      key={product.id}
      className="rounded mb-2 overflow-hidden hover:shadow-xl border border-gray-500 transition-shadow duration-300 ease-in"
    >
      <Link to={`/product/${product.id}`}>
        <img src={product.img} alt="a" />
      </Link>
      <div className="h-32 md:px-6 md:py-4 text-left px-3 py-2 flex flex-col">
        <Link to={`/product/${product.id}`}>
          <div className="font-bold text-xl mb-2 text-blue-1">
            {product.name}
          </div>
        </Link>
        <Link to={`/search?q=${product.category}`}>
          <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-1">
            {product.category}
          </span>
        </Link>
        <span className="text-gray-700 text-base">{`(${product.qty} available)`}</span>
      </div>
      <div className="md:px-6 text-left px-3 pb-4">
        <span className="inline-block text-xl font-bold text-green-2 mr-2">
          $ {product.price}
        </span>
      </div>
    </div>
  );
}
