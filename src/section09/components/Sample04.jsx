import React, { useEffect, useState } from "react";

const Sample04 = () => {
  const [count, setCount] = useState(0);
  const [Started, setStarted] = useState(false);
  const startHandler = () => {
    setCount(0);
    setStarted(true);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (Started) {
        setCount((prev) => prev + 1);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [count, Started]);

  return (
    <div>
      <h1>Hi developer</h1>
      <h3>Sample 04: chronometer</h3>
      <div>{count}</div>
      <div className="btn-group09">
        {(count === 0 || Started === false) && (
          <button className="btn btn-new" onClick={startHandler}>N</button>
        )}
        {Started && <button className="btn btn-pulse" onClick={()=>setStarted(false)}>P</button>}
        {count !== 0 && Started === false && (
          <button className="btn btn-continue" onClick={()=>setStarted(true)}>C</button>
        )}
      </div>
    </div>
  );
};

export default Sample04;
