import React, { useState } from "react";
import "./auth.css"

import AuthBg from "../../assets/images/login-bg.jpg";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

export default function AuthContainer() {
  const [activeTab, setActiveTab] = useState("login"); // login | register

  const handleLoginTabClicked = () => {
    setActiveTab("login");
  }

  const handleRegisterTabClicked = () => {
    setActiveTab("register");
  }

  return (
    <div id="login">
      <div className="container">
        <div className="side-image">
          {/* For images */}
          <img src={AuthBg} alt="" width={200} />
        </div>
        <div className="form-container">
          {/* for form */}
          <div className="form-tab-container">
            <a 
              href="#" 
              onClick={() => handleLoginTabClicked()} 
              className={`form-tab ${activeTab === "login" ? "active": ""}`}
            >
              Sign In
            </a>
            <a 
              href="#" 
              onClick={() => handleRegisterTabClicked()} 
              className={`form-tab ${activeTab === "register" ? "active": ""}`} 
            >
              Register
            </a>
          </div>

          {
            activeTab === "login" ?
              <Login />:
              <Register />
          }
          
        </div>

      </div>
    </div>
  )
}