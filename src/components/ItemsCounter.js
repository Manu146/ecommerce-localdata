import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function ItemsCounter() {
  let { items } = useContext(UserContext);
  let itemsnumber = items.length;
  return (
    <span className="text-white text-sm px-1 bg-blue-2 absolute top-0 right-0 rounded-full font-semibold absolute counter">
      {itemsnumber}
    </span>
  );
}
