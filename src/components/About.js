import React from "react";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Us</h1>
        <p className="tagline">
          Passionate about delivering great food and experiences 🍽️
        </p>
        <div className="about-content">
          <p>
            Welcome to <strong>Sayak's Food World</strong>! We are dedicated to
            bringing you the best food delivery experience. Our mission is to
            connect people with the most delicious meals from their favorite
            restaurants — fast, easy, and with a smile.
          </p>
          <div>
            <UserClass />
          </div>
        </div>
        <div className="about-footer">
          <p>Made with 💗 by SAYAK & Team</p>
        </div>
      </div>
    </div>
  );
};

export default About;
