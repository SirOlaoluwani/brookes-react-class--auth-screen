import React, { useState } from "react";
import "./register.css"

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div id="login">
      <p className="description">Your personal data will be used to process your order, support your experience on this website and for other purposes described in our privacy policy.</p>
      <form action="" className="form">
        <div className="form-content">
          <label>Full name</label>
          <input className="form-input" type="text" placeholder="Enter your full name" />
        </div>
        <div className="form-content">
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
        <button type="submit" className="sign-in-button">Register</button>
      </form>
    </div>
  )
}