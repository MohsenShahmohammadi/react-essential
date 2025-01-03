import React, { useEffect, useState } from "react";

const Sample03 = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(`Timer running ...`);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log(`Timer cleaned up successfully`);
    };
  }, []);
  return (
    <div>
      <h1>Hi Developer</h1>
      <p>Sample 03: use timer in useEffect.</p>
    </div>
  );
};

export default Sample03;
