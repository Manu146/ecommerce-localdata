import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function ItemsTable() {
  const { dispatch, items } = useContext(UserContext);
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };
  return (
    <div className="cart-table">
      <table className="table-auto w-full mb-2">
        <tbody className="text-gray-700">
          <tr>
            {items.map((item) => {
              return (
                <td className="border rounded px-3 py-1 mb-2 flex items-center">
                  <div className="w-1/4">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="flex flex-col w-2/4 pr-2">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                  <div className="flex flex-col w-1/4">
                    <span>Qty: {item.qty}</span>
                    <span>$ {item.price * item.qty}</span>
                  </div>
                  <button
                    className="rounded-full bg-gray-200 p-2 hover:text-green-2"
                    value={item.id}
                    onClick={(e) => {
                      removeItem(e.target.value);
                    }}
                  >
                    <i class="material-icons block text-sm">close</i>
                  </button>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
