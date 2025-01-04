import React from "react";
import "./Basket.css";
import { SlBasket } from "react-icons/sl";


const Basket = ({ basketData, sumPrice, discountPrice }) => {
  const tax = sumPrice * 0.13;
  const total = sumPrice + tax;
  return (
    <>
      <div className="basket-group">
        <div className="basket-group-header">
          <h3>Basket</h3>
          <SlBasket/>
        </div>
        {total !== 0 ? (
          <div className="basket-group-item">
            <div className="basket-list">
              {basketData.map((item) => (
                <div className="basket-item">
                  <span>
                    {item.name} {item.qty > 1 && <span>x {item.qty}</span>}
                  </span>
                  <span>$ {(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="basket-sum">
              <div className="basket-item">
                <span>Sum</span>
                <span>$ {sumPrice.toFixed(2)}</span>
              </div>
              <div className="basket-item">
                <span>Save</span>
                <span>$ {discountPrice.toFixed(2)}</span>
              </div>
              <div className="basket-item">
                <span>TAX</span>
                <span>$ {tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="basket-total">
              <span>Total</span>
              <span>$ {total.toFixed(2)}</span>
            </div>
          </div>
        ) : (
            <h4 className="empty-basket">This list is empty</h4>
        )}
      </div>
    </>
  );
};

export default Basket;
