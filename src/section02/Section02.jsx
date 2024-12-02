import React from "react";
import Search from "./components/searchComponent/Index";
import "./section02.css";

const Section02 = () => {
  return (
    <>
      <div className="container">
        <header>
          <div className="siteName-container">
            <h1>My Website</h1>
          </div>
          <div className="menu-container">
            <Search />
          </div>
        </header>
        <main>main content</main>
      </div>
    </>
  );
};

export default Section02;
