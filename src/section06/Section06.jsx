import React, { useState } from "react";
import Image from "./components/imageComponent/Image";
import "./index.css";
import { foodCategory, food } from "./data/foodFackData";

const Section06 = () => {
  const [imageSelection, setImageSelection] = useState(food);
  const CategorySelectHandler = (item) => {
    if (item === 0) {
      setImageSelection(food);
    } else {
      const result = food.filter((c) => c.categoryRef === item);
      setImageSelection(result);
    }
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <h3 className="header-title">Welcome to our gallery</h3>
        </div>
        <div className="content-container">
          <div className="category-group">
            <nav className="category-menu">
              <a className="category-menu-item" onClick={()=>CategorySelectHandler(0)}>All</a>
              {foodCategory.map((item) => (
                <a key={item.id} className="category-menu-item" onClick={()=>CategorySelectHandler(item.id)}>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="category-item">
            {imageSelection.map((item) => (
              <div key={item.id} className="image-food">
                <Image data={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="footer">
          <p>Copyright @2025</p>
        </div>
      </div>
    </>
  );
};

export default Section06;
