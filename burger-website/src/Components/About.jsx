import React from "react";
import aboutImage from "../Images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>Upcoming Event</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit!</p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
}

export default About;
