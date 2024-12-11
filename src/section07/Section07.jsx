import React, { useState } from "react";
import "./index.css";
import CategoryBlog from "./components/categoryBlog/CategoryBlog";
import Blog from "./components/blog/Blog";
import { category, blog } from "./data/staticData";
const Section07 = () => {
  const [categorySelected, setCategorySelected] = useState(category[0]);
  let blogSelected = blog.filter((c) => c.categoryRef === categorySelected.id);

  return (
    <>
      <div className="container">
        <div className="header">
          <h3 className="header-title">My Weblog pages</h3>
        </div>
        <div className="main-blog">
          <div className="weblog-main-left">
            <CategoryBlog data={category} onPress={setCategorySelected}/>
          </div>
          <div className="weblog-main-right">
            {blogSelected.map((item) => (
              <Blog data={item} categoryName={categorySelected.name} />
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

export default Section07;
