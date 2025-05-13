
import React, { useState } from "react";

import { CDN_url, LOGO_URL } from '../utils/constants';




const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <img src={LOGO_URL} alt="logo" className="logo"/>
          <h1 className="site-title">Sweet 🍒</h1>
        </div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          &#9776;
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#destinations">Destinations</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
};
export default Header;