import React, { useRef } from "react";
import "./index.css";

const Login = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const panelRef = useRef();
  const LoginHandler = () => {
    const user = userNameRef.current.value;
    const password = passwordRef.current.value;
    const panel = panelRef.current.value;
    var message = "";
    if (user === "" || password === "" || panel === "") {
      message = "please fill all fields";
    } else {
      switch (panel) {
        case "1":
          message = "Hi " + user + " welcome to User Panel";
          break;
        case "2":
          message = "Hi " + user + " welcome to Customer Panel";
          break;
        case "3":
          message = "Hi " + user + " welcome to Admin Panel";
          break;
        default:
          message = "something is wrong. please try again";
          break;
      }
    }

    alert(message);
  };
  return (
    <>
      <div className="login-container">
        <h3>Welcome to My Site</h3>
        <div className="input-group">
          <label className="label-form">Username</label>
          <input ref={userNameRef} className="input-form" type="text" />
        </div>
        <div className="input-group">
          <label className="label-form">Password</label>
          <input ref={passwordRef} className="input-form" type="text" />
        </div>
        <div className="input-group">
          <label className="label-form">Panel</label>
          <select ref={panelRef} className="input-form">
            <option value="1">User Panel</option>
            <option value="2">Customer Panel</option>
            <option value="3">Admin Panel</option>
          </select>
        </div>
        <div className="input-group center">
          <button className="btn-form" onClick={LoginHandler}>
            Login
          </button>
          <button onClick={()=>alert()}>cancel</button>
        </div>
      </div>
    </>
  );
};

export default Login;
