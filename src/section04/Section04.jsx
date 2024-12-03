import React, { useState } from "react";

const Section04 = () => {
  const [mode, setMode] = useState("light");
  const ModeHandler = (event) => {
    setMode(event);
  };
  return (
    <>
      <header
        style={{
          backgroundColor: mode === "light" ? "gray" : "yellow",
          height: "60px",
        }}
      >
        <div>
          {mode === "light" ? (
            <button onClick={() => ModeHandler("dark")}>Night Mode</button>
          ) : (
            <button onClick={() => ModeHandler("light")}>Day Mode</button>
          )}
        </div>
      </header>
      <main
        style={{
          marginTop: "5px",
          minHeight: "100vh",
          backgroundColor: mode === "light" ? "#c1c1c1" : "brown",
          height: "60px",
        }}
      >
        Content
      </main>
    </>
  );
};

export default Section04;
