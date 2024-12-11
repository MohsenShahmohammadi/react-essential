import React, { useState } from "react";
import Blog from "./components/blog/Blog";
import CategoryBlog from "./components/categoryBlog/CategoryBlog";
import "./index.css";
import { category, blog } from "./data/staticData";

const Section07 = () => {
  const [categorySelected, setCategorySelected] = useState(category[0]);
  let blogSelected = [];

  for (let index = 0; index < blog.length; index++) {
    blogSelected = blog.filter((c) => c.categoryRef === categorySelected.id);
  }
  return (
    <>
      <div className="container">
        <div className="header">
          <h2 className="website-title">My weblog pages</h2>
        </div>
        <div className="main-blog">
          <div className="weblog-main-left">
            <CategoryBlog data={category} onPress={setCategorySelected} />
          </div>
          <div className="weblog-main-right">
          {blogSelected.map((item)=>(
            <Blog key={item.id} data={item} categoryName={categorySelected.name} />
          ))}
          </div>
        </div>
        <div className="footer">
          <span className="copyright">Copyright @2025</span>
        </div>
      </div>
    </>
  );
};

export default Section07;
