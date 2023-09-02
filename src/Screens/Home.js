import React from "react";
import Crousels from "./Crousels";
import TestAndPackages from "./TestAndPackages";
import "./Home.css";
import About from './About.js'
import SpecializedHealthPackages from "./SpecializedHealthPackages";
import About from "./About";
import Footer from "./Footer";

function Home() {
  const containerStyles = {
    width: "100%",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <NavBar />
      <div style={containerStyles}>

      <Crousels />
      </div>

        <TestAndPackages />

        <SpecializedHealthPackages/>

        <About/>

<Footer/>
    </div>
  );
}

export default Home;
