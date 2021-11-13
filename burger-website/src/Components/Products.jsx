import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../Images/s1.png";
import pimage2 from "../Images/s2.png";

function Products() {
  return (
    <div id="products">
      <h3>CHOOSE AND ENJOY</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <div className="a-container">
        <Productbox image={pimage1} title="Zinger Burger" />
        <Productbox image={pimage2} title="Crispy Burger" />
        <Productbox image={pimage1} title="Crispy Zinger Burger" />
      </div>
    </div>
  );
}

export default Products;
