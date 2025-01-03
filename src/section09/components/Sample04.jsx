import React, { useEffect, useState } from "react";
import "../index.css";

const Sample04 = () => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const startHandler = () => {
    setCount(0);
    setStarted(true);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (started) {
        setCount(count + 1);
      }
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [count, started]);
  return (
    <div>
      <h1>Hi Developer</h1>
      <h3>Sample 04: chronometer with useEffect and useState</h3>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          textAlign: "center",
          width: "150px",
          margin: "20px",
        }}
      >
        {count}
      </div>
      <div className="btn-group09">
        {(count === 0 || started === false) && (
          <button className="btn btn-new" onClick={startHandler}>
            N
          </button>
        )}
        {started && (
          <button className="btn btn-new" onClick={() => setStarted(false)}>
            p
          </button>
        )}
        {count !== 0 && started === false && (
          <button className="btn btn-new" onClick={() => setStarted(true)}>
            C
          </button>
        )}
      </div>
    </div>
  );
};

export default Sample04;
