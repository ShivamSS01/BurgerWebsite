import React from "react";
import picture from "../Images/banner.png";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It's great time for a good taste of burger</h3>
        <h1>
          <span>Burger</span> FOR
          <br />
          WEEK
        </h1>
        <p className="details">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          tempore.
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Order
          </a>
        </div>
      </div>
      <div className="mainImage">
        <img src={picture} alt="" />
      </div>
    </div>
  );
}

export default Header;
