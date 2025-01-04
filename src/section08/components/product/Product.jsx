import React, { useState } from "react";
import "./Product.css";

const Product = ({
  data,
  addToBasket,
  basketData,
  removeFromBasket,
  valueChange,
}) => {
  const basketItem = basketData.find((c) => c.id === data.id);
  const [qty, setQty] = useState(basketItem ? basketItem.qty : 0);
  const addHandler = (item) => {
    setQty((c) => c + 1);
    addToBasket(item);
  };
  const removeHandler = (item) => {
    setQty((c) => c - 1);
    removeFromBasket(item);
  };
  const valueHandler = (e) => {
    const newVal = parseInt(e.target.value, 10) || 0;
    setQty(newVal);
    valueChange(data, newVal);
  };
  return (
    <>
      <div className="product-container">
        <div className="image-group">
          <div className="discount-describe">{data.discountCategory}</div>
          <img
            src={require("../../assets/" + data.image)}
            alt="image"
            className="image-product"
          />
        </div>
        <div className="product-info">
          <h3>{data.name}</h3>
          <div className="color-group">
            {data.color.map((item, index) => (
              <span
                key={index}
                className="color"
                style={{ backgroundColor: item }}
              ></span>
            ))}
          </div>
          <p>
            price: <s className="old-price">$ {data.price + data.save}</s> ${" "}
            {data.price}
          </p>
          <p>Save: $ {data.save}</p>
          <div className="btn-group">
            {qty === 0 ? (
              <button
                className="btnp btnp-add"
                onClick={() => addHandler(data)}
              >
                Add to Basket
              </button>
            ) : (
              <div className="btn-inline-group">
                <button
                  className="btnp btnp-add-sm"
                  onClick={() => addHandler(data)}
                >
                  +
                </button>
                <input
                  type="number"
                  className="qty-data-Show"
                  value={qty}
                  min={0}
                  max={100}
                  onChange={valueHandler}
                />
                <button
                  className="btnp btnp-remove-sm"
                  onClick={() => removeHandler(data)}
                >
                  -
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
