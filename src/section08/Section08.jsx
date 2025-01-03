import React, { useState } from "react";
import "./index.css";
import Basket from "./components/basket/Basket";
import Product from "./components/product/Product";
import { products, BasketItems } from "./data/SampleProduct.js";

const Section08 = () => {
  const [basketData, setBasketData] = useState([...BasketItems]);
  const [sumPrice, setSumPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  const AddToBasketHandler = (productItem) => {
    const existingItem = basketData.find((item) => item.id === productItem.id);
    if (existingItem) {
      const updatedBasket = basketData.map((item) =>
        item.id === productItem.id ? { ...item, qty: item.qty + 1 } : item
      );
      setBasketData(updatedBasket);
      setSumPrice((prev) => prev + productItem.price);
      setDiscountPrice((prev) => prev + productItem.save);
    } else {
      const newItem = {
        id: productItem.id,
        name: productItem.name,
        qty: 1,
        price: productItem.price,
        discount: productItem.save,
      };
      setBasketData([...basketData, newItem]);
      setSumPrice((prev) => prev + productItem.price);
      setDiscountPrice((prev) => prev + productItem.save);
    }
  };

  const RemoveFromBasketHandler = (productItem) => {
    var existingItem = basketData.find((item) => item.id === productItem.id);
    if (existingItem) {
      let updateBasket;
      if (existingItem.qty > 1) {
        updateBasket = basketData.map((item) =>
          item.id === productItem.id ? { ...item, qty: item.qty - 1 } : item
        );
      } else {
        updateBasket = basketData.filter((item) => item.id !== productItem.id);
      }
      setBasketData(updateBasket);
      setSumPrice((prev) => prev - productItem.price);
      setDiscountPrice((prev) => prev - productItem.save);
    }
  };
  const valueChanged = (productItem, value) => {
    const numericValue = parseInt(value, 10) || 0;
    var existingItem = basketData.find((item) => item.id === productItem.id);
    let updateBasket;
    if (existingItem) {
      if (numericValue === 0) {
        updateBasket = basketData.filter((item) => item.id !== productItem.id);
      } else {
        updateBasket = basketData.map((item) =>
          item.id === productItem.id
            ? {
                ...item,
                qty: numericValue,
              }
            : item
        );
      }
      const { sum, discount } = updateBasket.reduce(
        (acc, item) => {
          acc.sum += item.price * item.qty;
          acc.discount += item.discount * item.qty;
          return acc;
        },
        { sum: 0, discount: 0 }
      );
      console.log(sum);
      console.log(discount);
      setBasketData(updateBasket);
      setSumPrice(sum);
      setDiscountPrice(discount);
    }
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <h2>My online Store</h2>
        </div>
        <div className="main">
          <div className="content-product">
            {products.map((product) => (
              <div key={product.id} className="product">
                <Product
                  data={product}
                  basketData={basketData}
                  addToBasket={(e) => AddToBasketHandler(e)}
                  RemoveFromBasketHandler={(e) => RemoveFromBasketHandler(e)}
                  valueChanged={(id, value) => valueChanged(id, value)}
                />
              </div>
            ))}
          </div>
          <div className="basket-container">
            <div className="basket-group">
              <Basket
                basketData={basketData}
                sumPrice={sumPrice}
                discountPrice={discountPrice}
              />
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
