import React, { useState } from "react";
import "./login.css"

import LoginBg from "../../assets/images/login-bg.jpg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div id="login">
      <div className="container">
        <div className="side-image">
          {/* For images */}
          <img src={LoginBg} alt="" width={200} />
        </div>
        <div className="form-container">
          {/* for form */}
          <div className="form-tab-container">
            <a href="/login" className="form-tab active">
            Sign In
            </a>
            <a href="/register" className="form-tab" >
              Register
            </a>
          </div>

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
            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
          
        </div>

      </div>
    </div>
  )
}