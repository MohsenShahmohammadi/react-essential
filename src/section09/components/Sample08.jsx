import React, { useState, useEffect } from "react";
import "../index.css";

const Sample08 = () => {
  const [gallery, setGallery] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const getImageUrl = () => {
    setImageUrl(null);
    fetch("https://picsum.photos/500")
      .then((response) => {
        setImageUrl(response.url);
      })
      .catch((err) => console.error("Error fetching image:" + err));
  };
  const selectImageUrl = () => {
    setGallery([...gallery, imageUrl]);
    getImageUrl();
  };
  useEffect(() => {
    getImageUrl();
  }, []);
  return (
    <div>
      <h1>Hi Developer :)</h1>
      <div className="btn-group08">
        <button onClick={getImageUrl}>Get random Image</button>
        <button onClick={selectImageUrl}>sent to gallery</button>
      </div>
      <div>
        {imageUrl ? <img src={imageUrl} alt="random" /> : <p>loading...</p>}
      </div>
      {gallery.length > 0 && (
        <div className="image-gallery-container">
          <h3>Image Gallery</h3>
          <div className="image-gallery">
            {gallery.map((item, index) => (
              <img src={item} key={index} className="img-gallery" alt="" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sample08;
