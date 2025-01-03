import React from "react";
import { useEffect } from "react";

const Sample01 = () => {
// useEffect(() => {
// console.log("Sample01");
// })
useEffect(() => {
    console.log("Sample01");
  }, []);

  return (
    <div>
      <h1>Hi Developer</h1>
      <p>Sample 01: what's useEffect.</p>
    </div>
  );
};

export default Sample01;
