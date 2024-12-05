import React, { useState } from "react";
import "../App.css"; // Add CSS styles in this file
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    navigate('/home');
  };

  return (
    <>
      <div className="login-container">
        <h2 className="login-header">Admin Login</h2>
        <div className="input-container">
          <div className="input-box">
            <span className="icon-email"><i class="fa-solid fa-arrow-right-to-bracket"></i></span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <i className="icon-password">***</i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className="icon-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#999999" fill="none">
                <path d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M15 13.5L16.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 11L22 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 13L4 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 13.5L7.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#999999" fill="none">
                <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" stroke-width="1.5" />
              </svg>}
            </i>
          </div>
        </div>
        <button className="login-button" onClick={handleLogin}>
          <span className="icon-lock"><i class="fa-solid fa-shield-halved"></i></span> LOGIN
        </button>
        <p className="terms-text">
          By proceeding, you agree to <a href="/terms">Terms</a> and{" "}
          <a href="/privacy">privacy</a>
        </p>
      </div>
    </>
  );
};

export default Login;
