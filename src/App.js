import React, { useState } from "react";
import "./tailwind.generated.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import SearchResult from "./components/SearchResult";
import UserContextProvider from "./contexts/UserContext";
import CartMobile from "./components/CartMobile";
import HomePage from "./pages/HomePage";

function App() {
  const [showmCart, setshowmCart] = useState(false);
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/product/:id">
              <Navbar></Navbar>
              <ProductPage></ProductPage>
              <div
                className={`bg-gray-600 bg-opacity-50 h-full w-full fixed z-10 top-0 left-0 ${
                  showmCart ? "block" : "hidden"
                }`}
              >
                <CartMobile></CartMobile>
              </div>
              <Footer
                showmCart={showmCart}
                setshowmCart={setshowmCart}
              ></Footer>
            </Route>
            <Route exact path="/search">
              <Navbar></Navbar>
              <SearchResult></SearchResult>
            </Route>
            <Route path="/">
              <HomePage></HomePage>
              <div
                className={`bg-gray-600 bg-opacity-50 h-full w-full fixed z-10 top-0 left-0 ${
                  showmCart ? "block" : "hidden"
                }`}
              >
                <CartMobile></CartMobile>
              </div>
              <Footer
                showmCart={showmCart}
                setshowmCart={setshowmCart}
              ></Footer>
            </Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
