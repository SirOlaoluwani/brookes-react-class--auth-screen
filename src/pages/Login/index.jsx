import React, { useState } from "react";
import "./login.css"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div id="login">
      <form action="" className="form">
        <div className="form-content" style={{paddingTop: 32}}>
          <label>Email Address</label>
          <input className="form-input" type="email" placeholder="Enter email address" />
        </div>
        <div className="form-content">
          <label>Password</label>
          <div className="password-field">
            <input className="password-field-input" type={showPassword ? "text" : "password"} placeholder="Enter password" />
            <button className="show-btn" onClick={handleShowPassword}>{showPassword ? "Hide" :"Show"}</button>
          </div>
        </div>
        <div className="form-footer">
          <button className="forgot-password-button">Forgot Password</button>
          <button type="submit" className="sign-in-button">Sign In</button>
        </div>
        
      </form>
    </div>
  )
}