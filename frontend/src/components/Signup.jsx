import React, { useState } from "react";
import axios from "axios";
import "./Signup.css"; // Import your CSS file for styling

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "", 
    emailOTP:""
  });
  const handleSignUp = async () => {
    const { name, phone, email, password, emailOTP } = formData;
  
    try {
      const response = await axios.post('http://localhost:6969/Sign-up', {
        name: name,
        phone: phone,
        email: email,
        password: password,
        Otp: emailOTP,
      });
  
      console.log(response.data.data.message);
      if(response.data.data.message ==="User already Existed")
      {
        alert("User already Existed")
        setFormData({
          name: "",
          phone: "",
          email: "",
          password: "", 
          emailOTP:""
        });
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };
  
  


  const [showOtpFields, setShowOtpFields] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleVerify = async () => {
    setShowOtpFields(true);
    const dataToSend = {
      Email: formData.email,
    };

    try {
      const response = await axios.post('http://localhost:6969/generateOtp', dataToSend);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" >
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
        </label>
       
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
        </label>
        <label>
          Email:
          <div className="email-input-container">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
            <button type="button" onClick={handleVerify}>Verify</button>
          </div>
        </label>
        {showOtpFields && (
          <label>
            Email OTP:
            <input type="text" name="emailOTP" value={formData.emailOTP} onChange={handleChange} placeholder="Enter OTP from email" />
          </label>
        )}
         <button type="button" onClick={handleSignUp}>SignUp</button>
      </form>
    </div>
  );
}

export default Signup;
