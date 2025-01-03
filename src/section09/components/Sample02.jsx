import React from "react";
import { useEffect, useState } from "react";
import '../index.css';

const Sample02 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Sample02 - my Clicks count is ${count}`);
  }, [count]);
  return (
    <>
      <h1>Hi Developer</h1>
      <p>Sample 02: Change data</p>
      <span>{count}</span>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
    </>
  );
};

export default Sample02;
