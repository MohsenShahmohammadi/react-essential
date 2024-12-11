import React from "react";
import "./index.css";
import Basket from "./components/basket/Basket";
import Product from "./components/product/Product";

const Section08 = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h2>My online Store</h2>
        </div>
        <div className="main">
          <div className="content-category">
            <Product />
          </div>
          <div className="basket-container">
            <div className="basket-group">
              <Basket />
            </div>
          </div>
        </div>
        <div className="footer">
          <p>Copyright @2025</p>
        </div>
      </div>
    </>
  );
};

export default Section08;
