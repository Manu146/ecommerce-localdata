import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const [search, setsearch] = useState("");
  const history = useHistory();
  const setQuery = () => {
    history.push({
      pathname: "/search",
      search: `?q=${search}`,
    });
  };
  return (
    <div className="md:w-3/4 xl:w-4/5 md:px-12 md:py-0 py-2 w-full">
      <form
        action=""
        className="relative"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery();
        }}
      >
        <input
          type="search"
          name=""
          id=""
          className="w-full py-2 px-10 block rounded-lg bg-s-bgray text-2x1 focus:border-indigo focus:shadow-outline"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        <i className="material-icons absolute top-0 left-0 mt-2 ml-2 text-gray-500">
          search
        </i>
      </form>
    </div>
  );
}
