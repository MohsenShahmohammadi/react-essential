import React, { useRef, useState } from "react";
import "./index.css";

export const CalcComponent = () => {
  const NumberARef = useRef();
  const NumberBRef = useRef();
  const [result, setResult] = useState(0);
  const Handler = (event) => {
    const numA = parseFloat(NumberARef.current.value);
    const numB = parseFloat(NumberBRef.current.value);
    var data = eval(numA + event + numB);
    setResult(data);
  };
  const ClearHandler = () => {
    NumberARef.current.value = "";
    NumberBRef.current.value = "";
    setResult(0);
  };

  return (
    <>
      <div className="calc-container">
        <h3 className="calc-title">Welcome to calc App</h3>
        <div className="calc-content-container">
          <div className="calc-content-item">
            <label className="label-number">Number A:</label>
            <input ref={NumberARef} type="number" className="input-number" />
          </div>
          <div className="calc-content-item">
            <label className="label-number">Number B:</label>
            <input ref={NumberBRef} type="number" className="input-number" />
          </div>
          <div className="calc-content-item button-group">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => Handler("+")}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => Handler("-")}
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => Handler("*")}
            >
              *
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={() => Handler("/")}
            >
              /
            </button>
            <button
              type="button"
              className="btn btn-remove"
              onClick={ClearHandler}
            >
              c
            </button>
          </div>
          <div className="calc-content-item content-result">
            <label className="label-result">Result:</label>
            <label className="label-result">{result}</label>
          </div>
        </div>
      </div>
    </>
  );
};
export default CalcComponent;
