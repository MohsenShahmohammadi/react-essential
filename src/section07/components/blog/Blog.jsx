import React from "react";
import "./blog.css";

const Blog = ({ data,categoryName }) => {
  const pic = require("../../assets/" + data.image);
  return (
    <>
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-header-image">
            <img
              src={pic}
              className="image-blog"
            />
          </div>
          <div className="blog-header-title">
            <table className="tbl-blog-title">
              <tr>
                <td>
                  <label>Category:</label>
                </td>
                <td>
                  <p>{categoryName}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Title:</label>
                </td>
                <td>
                  <p>{data.title}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Author:</label>
                </td>
                <td>
                  <p>{data.Author}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Date:</label>
                </td>
                <td>
                  <p>{data.date}</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="blog-content">
          <p>
            {data.shortText}
          </p>
        </div>
        <div className="blog-footer">
          <button>More</button>
        </div>
      </div>
    </>
  );
};

export default Blog;
