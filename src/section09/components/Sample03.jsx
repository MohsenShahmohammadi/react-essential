import React, { useEffect } from "react";

const Sample03 = () => {
    useEffect(() => {
      const timer=setInterval(()=>{
        console.log('Timer Running ...')
      },3000);
    
      return () => {
        clearInterval(timer);
        console.log('Timer removed')
      }
    }, [])
    
  return (
    <div>
      <h1>Hi Developer</h1>
      <p>Sample 03: What's UseEffect..</p>
    </div>
  );
};

export default Sample03;
