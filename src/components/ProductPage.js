import React, { useState, useEffect, useContext, useRef } from "react";
import SliderProducts from "./SliderProducts";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import useLocalData from "../customHooks/useLocalData";
import Spinner from "./loaders/Spinner";

export default function ProductPage() {
  let { dispatch } = useContext(UserContext);
  let { id } = useParams();
  const lastId = useRef(id);
  const { loading, data, error, getData } = useLocalData({
    loadOnMount: true,
    params: {
      searchFor: "product",
      q: id,
      singleItem: true,
    },
  });
  const [qty, setqty] = useState(0);
  const [isAdded, setisAdded] = useState(false);
  const updtQty = (e) => {
    e.preventDefault();
    let tQty = e.target.value === "+" ? qty + 1 : qty - 1;
    if (tQty >= 0 && tQty <= data.qty) setqty(tQty);
    else return;
  };
  const addToCart = (e) => {
    e.preventDefault();
    if (qty > 0) {
      let { id, price, name, img } = data;
      let item = { id, price, name, qty, img };
      console.log(item);
      dispatch({ type: "ADD_ITEM", item });
      setisAdded(true);
      setqty(0);
      setTimeout(() => {
        setisAdded(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (lastId.current === id) return;
    getData();
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="w-11/12  md:mt-16 mt-24 mx-auto p-3">
      {!loading && data && (
        <>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mt-2">
              <div className="rounded-lg md:w-3/4 w-full border border-gray-500 mx-auto overflow-hidden shadow">
                <img src={data.img} alt="" className="w-full" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl inline-block p-2 text-blue-1">
                {data.name}
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                accusamus consequatur aut cumque esse dolorum corrupti
                similique, distinctio reiciendis molestias?
              </p>
              <div className="w-full mt-6 items-center flex">
                <span className="inline-block text-2xl font-bold text-green-2 mr-2">
                  $ {data.price}
                </span>
                <span className="inline-block text-sm text-s-bgray">
                  ({data.qty} available)
                </span>
              </div>
              <div className="w-full mt-8">
                <form
                  action=""
                  className="flex justify-around"
                  onSubmit={(e) => {
                    addToCart(e);
                  }}
                >
                  <button
                    className={`btn text-green-1 ${
                      isAdded ? "bg-orange-600" : "bg-blue-2"
                    }  shadow transition-colors duration-500 ease-in`}
                  >
                    {isAdded && (
                      <i className="material-icons text-base">done</i>
                    )}
                    {isAdded ? "Added" : "Add to cart"}
                  </button>
                  <div className="">
                    <button
                      className="rounded-tl rounded-bl bg-blue-2 px-3 text-gray-400 font-bold h-10"
                      onClick={(e) => {
                        updtQty(e);
                      }}
                      value="+"
                    >
                      +
                    </button>
                    <input
                      type="text"
                      name="qty"
                      id=""
                      value={qty}
                      className="shadow appearance-none h-10 rounded border-black w-8 text-center"
                      readOnly
                    />
                    <button
                      className="rounded-tr rounded-br bg-blue-2 px-3 text-gray-400 font-bold h-10"
                      value="-"
                      onClick={(e) => {
                        updtQty(e);
                      }}
                    >
                      -
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full mt-6">
            <div className="flex justify-between px-2 mb-2 ">
              <h2 className="text-2xl inline-block text-gray-700">
                Related products
              </h2>
              <Link
                to={`/search?q=${data.category}`}
                className="text-gray-600 flex items-center"
              >
                View all
                <span className="material-icons">keyboard_arrow_right</span>
              </Link>
            </div>
            <SliderProducts category={data.category}></SliderProducts>
          </div>
        </>
      )}
      {loading && (
        <div className="h-screen flex items-center justify-center">
          <Spinner></Spinner>
        </div>
      )}
      {error && <div>error</div>}
    </div>
  );
}
