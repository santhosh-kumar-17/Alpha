import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" style={{color:'Green'}}>Alpha<span style={{color:'#000'}}>Chart</span></div>
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="https://intradayglobal.com/alpha-logins/">Alpha chart</a>
          <a href="#jobs">Other Projects</a>
          <div className="navbar-profile" style={{background: 'green'}}>Your Profile</div> {/* Apply background color here */}
        </div>
        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
