import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Popularity = ({ star }) => {
  const starEmpty = 5 - star;
  let stars = [];
  for (let index = 0; index < star; index++) {
    stars.push(
      <FontAwesomeIcon
        key={`filled-${index}`}
        icon="fa-solid fa-star"
        color="gold"
      />
    );
  }
  for (let index = 0; index < starEmpty; index++) {
    stars.push(
      <FontAwesomeIcon
        key={`starEmpty-${index}`}
        icon="fa-regular fa-star"
        color="gold"
      />
    );
  }
  return (
    <>
      <div className="popularity-container">{stars}</div>
    </>
  );
};

export default Popularity;
