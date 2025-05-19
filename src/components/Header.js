import React, { useState } from "react";

import { CDN_url, LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  return (
    <header className="header">
      <div className="container">
        {/* <!-- Logo Section (Left) --> */}
        <div className="logo-section">
          <img src={LOGO_URL} alt="Logo" className="logo" />
          <h1 className="site-title">Sweet 🍒</h1>
        </div>

        {/* <!-- Center Navigation --> */}
        <nav className="navbar">
          < Link to="/" >Home</Link>
          < Link to="About">About</Link>
          < Link to="Services">Services</Link>
          < Link to="Contact">Contact</Link>
        </nav>

        {/* <!-- Login/Logout --> */}
        <div className="nav-actions">
          <button
            className="but"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </div>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div className="mobile-menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </header>
  );
};
export default Header;
