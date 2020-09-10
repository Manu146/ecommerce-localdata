import React, { useEffect, useRef, useState } from "react";
import useQuery from "../customHooks/useQuery";
import useInfiniteScroll from "../customHooks/useInfiniteScroll";
import useLocalData from "../customHooks/useLocalData";
import ProductCard from "./ProductCard";
import Spinner from "./loaders/Spinner";

export default function SearchResult() {
  let q = useQuery("q");
  let prevQ = useRef(q);
  const [page, setPage] = useState(0);
  const { loading, error, data, getData } = useLocalData({
    loadOnMount: true,
    params: { searchFor: "product", q, limit: 10 },
  });
  const setisAtBottom = useInfiniteScroll(fetchFn);
  function fetchFn() {
    setPage(page + 1);
    setisAtBottom(false);
  }
  useEffect(() => {
    if (prevQ.current !== q) {
      console.log("first effect executed");
      prevQ.current = q;
      getData();
    }
  }, [q]);
  useEffect(() => {
    if (page !== 0) {
      getData(page);
    } else {
      return;
    }
  }, [page]);

  return (
    <div className="w-11/12 mx-auto mt-24 pt-4">
      <h1 className="text-2xl mb-4 px-2 text-center text-gray-700">
        Search results for: {q}
      </h1>
      {data && (
        <div className="w-full grid md:grid-cols-5 gap-4 grid-cols-2">
          {data.map((product) => {
            return (
              <ProductCard product={product} key={product.id}></ProductCard>
            );
          })}
        </div>
      )}
      {loading && (
        <div className="h-64 flex justify-center items-center">
          <Spinner></Spinner>
        </div>
      )}
      {!loading && error && (
        <div className="h-full flex justify-center items-center">
          Something went wrong.. {error}
        </div>
      )}
      {data && data.length === 0 && !loading && (
        <div className="h-full flex justify-center items-center">
          No results found.
        </div>
      )}
    </div>
  );
}
