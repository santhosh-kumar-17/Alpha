import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState(false); // Define isSignUp state
  const [verifyButtonVisible, setVerifyButtonVisible] = useState(true); // Define state for verify button visibility

  const toggleSignUp = () => setIsSignUp(!isSignUp); // Define toggleSignUp function

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:6969/Log-in", {
        params: {
          email: formData.email,
          password: formData.password,
        },
      });

      if (response.data.status === "Success") {
        navigate("/Home");
      }

      if (response.data.data.message === "User not registered yet") {
        alert("User not registered yet");
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error("Error during login:", error.response);
      // Handle the error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you want to submit the data as JSON
    const jsonData = JSON.stringify(formData);
    console.log("Submitted Data:", jsonData);
    // Add your logic to send the JSON data to the server or perform any other necessary actions
  };

  const handleVerifyClick = () => {
    // Add logic here to handle verification
    setVerifyButtonVisible(false); // Hide the verify button
  };

  return (
    <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
      <div className="form sign-in">
        <h2>Welcome</h2>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <button
          type="button"
          className="submit"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h3>Don't have an account? Please Sign up!</h3>
          </div>
          <div className="img__text m--in">
            <h3>If you already have an account, just sign in.</h3>
          </div>
          <div className="img__btn" onClick={toggleSignUp}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Create your Account</h2>
          <label>
            <span>Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          &nbsp; {/* Non-breaking space */}
          {verifyButtonVisible && (
            <button type="button" style={{ backgroundColor: 'green', color: 'white' }} onClick={handleVerifyClick}>Verify</button>
          )}
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <label>
            <span>OTP</span>
            <input type="password" />
          </label>
          <button type="button" className="submit">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
