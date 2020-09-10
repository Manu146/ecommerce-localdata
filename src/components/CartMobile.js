import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import ItemsTable from "./ItemsTable";

export default function CartMobile() {
  const { items } = useContext(UserContext);
  let total =
    items.length !== 0
      ? items.reduce((a, b) => {
          return a + b.price * b.qty;
        }, 0)
      : 0;
  let content = items.length ? (
    <ItemsTable></ItemsTable>
  ) : (
    <div>No items added so far..</div>
  );
  return (
    <div className="w-11/12 mt-32 mx-auto rounded border border-gray-500 text-gray-400 bg-white ">
      <div className="flex items-center flex-col py-3 px-6">
        <h1 className="text-blue-1 text-2xl mb-2">Your cart items</h1>
        {content}
        <div className="mb-2 text-gray-700 self-end">
          <span className="inline font-bold text-right">Total: $ {total}</span>
        </div>
        <button className="btn text-green-1 blue-2 w-4/5">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
