import React, {useState } from "react";
import "./Product.css";
const Product = ({
  data,
  basketData,
  addToBasket,
  RemoveFromBasketHandler,
  valueChanged,
}) => {
  const basketItem = basketData.find((c) => c.id === data.id);
  let [qty,setQty] = useState(basketItem ? basketItem.qty : 0);
  const allHandler = (item) => {
    setQty((prev) => prev + 1);
    console.log(qty)
    addToBasket(item);
  };
  const removeHandler = (item) => {
    setQty((prev) => prev - 1);
    console.log(qty)
    RemoveFromBasketHandler(item);
  };
  const valueHandler = (val) => {
    const newValue = parseInt(val.target.value, 10) || 0;
    setQty(newValue);
    valueChanged(data, newValue);
  };
  return (
    <>
      <div className="product-container">
        <div className="image-group">
          {data.discountCategory !== "" && (
            <div className="discount-describe">{data.discountCategory}</div>
          )}
          <img
            src={require("../../assets/" + data.image)}
            className="image-product"
            alt=""
          />
        </div>
        <div className="product-info">
          <h3>{data.name}</h3>
          <div className="color-group">
            {data.color.map((colorItem) => (
              <span
              key={colorItem}
                className="Color"
                style={{ backgroundColor: colorItem }}
              ></span>
            ))}
          </div>
          <p>
            price: <s className="old-price">${data.price + data.save}</s>$
            {data.price}
          </p>
          {data.save !== 0 && <p>Save: ${data.save}</p>}
          <div className="btn-group">
            {qty===0 ? (
              <button className="btnp btnp-add" onClick={() => allHandler(data)}>
                Add to basket
              </button>
            ) : (
              <div className="btn-inline-group">
                <button
                  className="btnp btnp-add-sm"
                  onClick={() => allHandler(data)}
                >
                  +
                </button>
                <input
                  type="number"
                  className="qty-data-show"
                  value={qty}
                  min={0}
                  max={100}
                  onChange={valueHandler}
                />
                {/* <span className="qty-data-show" >{basketData.find((c)=>c.id===data.id).qty}</span> */}
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
