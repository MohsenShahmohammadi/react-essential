import React, { useEffect, useState } from "react";

const Sample05 = () => {
  const [state, setState] = useState(null);
  const [number, setNumber] = useState(0);
  const [stop, setStop] = useState(false);
  const Play = () => {
    setState(null);
    setStop(false);
    setNumber(0);
  };
  const stopHandler = () => {
    setStop(true);
    if (number % 2 === 0) {
      setState("You are Win :)");
    } else {
      setState("You are Loose :(");
    }
  };
  useEffect(() => {
    if (state !== null) {
      document.title = state;
    } else {
      document.title = "Game title";
    }
    const timer = setInterval(() => {
      if (!stop) {
        number > 1000 ? setNumber(0) : setNumber(number + 1);
      }
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, [number, state]);

  return (
    <div>
      <h1>Hi Player</h1>
      <p>please press this button, if your number is even, you'll win.</p>
      <div>
        <h2>{number}</h2>
        {state !== null && state}
      </div>
      {!stop && state === null && (
        <button onClick={stopHandler}>Click me</button>
      )}
      {state === "You are Loose :(" && stop !== null && (
        <button onClick={() => Play()}>Game over</button>
      )}
      {state === "You are Win :)" && stop !== null && (
        <button onClick={() => Play()}>Run</button>
      )}
    </div>
  );
};

export default Sample05;
