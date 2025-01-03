import React, { useState, useEffect } from "react";

const Sample06 = () => {
  const [data, setData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    const getImage = () => {
      fetch("https://picsum.photos/500")
        .then((response) => {
          setImageUrl(response.url);
        })
        .catch((err) => console.error("Error fetching image:" + err));
    };
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        getImage();
      });
  }, []);
  return (
    <div>
      <h1>Hi Developer :)</h1>
      <p>In this sample, we learn how to work with API</p>
      {data ? (
        <div style={{ margin: "15px" }}>
          <img src={imageUrl} alt="random" />
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Sample06;
