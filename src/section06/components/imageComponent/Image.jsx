import React from "react";
import Popularity from "../popularityComponent/Popularity";
import "./index.css";

const Image = ({ data }) => {
  const pic = require("../../assets/"+data.image)
  return (
    <>
      <div className="image-container">
        <div className="group-image">
          <img src={pic} className="image" />
          <div className="image-caption">
            <div className="header-caption">
              <h5>{data.name}</h5>
              <div>
                <Popularity star={data.stars}/>
              </div>
            </div>
            <div className="detail-caption">
              <h6>About ingredients:</h6>
              <p>{data.ingredient}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
