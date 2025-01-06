import React, { useEffect, useState } from "react";

const Sample02 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if(count !== 0) {
        console.log(`Sample02 - my Click is : ${ count }`);
    }

  }, [count]);
  return (
    <div>
      <h1>Hi Developer</h1>
      <p>Sample 02: What's UseEffect..</p>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Clock Me</button>
    </div>
  );
};

export default Sample02;
