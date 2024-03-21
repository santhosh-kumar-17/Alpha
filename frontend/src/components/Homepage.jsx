// HomePage.js
import React from 'react';
import './HomePage.css';
import image from "../images/page.jpg";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content-section">
        <div className="left-section">
          <div className="typing-animation">
            <h1 style={{color:'Green'}}>Alpha Chart</h1>
            <span >
            <p style={{width:'350px',textAlign:'justify'}}> Your Trading Genius Wingman!</p>
            </span>
            {/* You can add more text or customize as needed */}
          </div>
        </div>
        <div className="right-section">
          <img src={image} alt="Homepage Image" className="responsive-image"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
