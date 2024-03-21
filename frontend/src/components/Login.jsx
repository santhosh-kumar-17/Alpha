import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async () => {
    
    try {
      const response = await axios.get('http://localhost:6969/Log-in', {
        params: {
          email: formData.email,
          password: formData.password,
        },
      });
     
      if(response.data.status === "Succes")
      {
        navigate('/Home');
      }
  
     
      
     
   
       

      if(response.data.data.message === "User not registered yet")
      {
        alert("User not registered yet")
        setFormData ({
          email: "",
          password: "",
        });
      }
     
     
    } catch (error) {
      console.error('Error during login:', error.response);
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

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form style={{ width: "300px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign in to your account</h2>
        <label style={{ marginBottom: "10px", display: "block" }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ddd" }}
            placeholder="Enter your email"
          />
        </label>
        <label style={{ marginBottom: "10px", display: "block" }}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ddd" }}
            placeholder="Enter your password"
          />
        </label>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleLogin}
        >
          Sign In
        </button>
        <p style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}>Forgot password?</p>
        <a href="/Signup">create new account</a>
      </form>
    </div>
  );
}

export default Login;
