import React from "react";
import "./categoryBlog.css";

const CategoryBlog = ({ data,onPress }) => {
  const categoryHandler=(item)=>{
    onPress(item)
  }
  return (
    <>
      <div className="catBlog-container">
        <ul className="catBlog-menu">
          {data.map((item) => (
            <li key={item.id} className="catBlog-menu-item" onClick={()=>categoryHandler(item)}>
              <a className="catBlog-item">{item.name}</a>
              <span className="badge">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryBlog;
