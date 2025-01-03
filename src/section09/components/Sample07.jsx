import React, { useState, useEffect } from "react";
import '../index.css'

const Sample07 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((result) => {
          setPosts(result);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching posts:", error));
    }, 3000);
  }, []);
  return (
    <div>
      <h1>Hi Developer :)</h1>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="post-container">
          <ul>
            {posts.map((item) => (
              <li className="post" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sample07;
