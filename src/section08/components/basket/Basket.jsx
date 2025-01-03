import React from "react";
import "./Basket.css";
import { SlBasketLoaded } from "react-icons/sl";

const Basket = ({ sumPrice, discountPrice, basketData }) => {
  const tax = sumPrice * 0.13;
  const total = sumPrice + tax;

  return (
    <>
      <div className="basket-group">
        <div className="basket-group-header">
          <h3>Basket</h3>
          <SlBasketLoaded />
        </div>
        {total !== 0 ? (
          <div className="basket-group-item">
            <div className="basket-list">
              {basketData.map((item) => (
                <div key={item.id} className="basket-item">
                  <span>
                    {item.name} {item.qty > 1 && <span>x {item.qty}</span>}
                  </span>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="basket-sum">
              {sumPrice !== 0 && (
                <div className="basket-item">
                  <span>Sum</span>
                  <span>${sumPrice.toFixed(2)}</span>
                </div>
              )}
              {discountPrice !== 0 && (
                <div className="basket-item">
                  <span>Saved</span>
                  <span>${discountPrice.toFixed(2)}</span>
                </div>
              )}
              {tax !== 0 && (
                <div className="basket-item">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              )}
            </div>
            <div className="basket-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        ) : (
          <h4 className="empty-basket">
            this list is empty
          </h4>
        )}
      </div>
    </>
  );
};

export default Basket;
