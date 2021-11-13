import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <BeatLoader color={"red"} loading={loading} css={override} size={30} />
      ) : (
        <>
          <Navbar />
          <Header />
          <Products />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
