import React from "react";
import Crousels from "./Crousels";
import TestAndPackages from "../Screens/TestAndPackages";
import "./Home.css";
import SpecializedHealthPackages from "../Screens/SpecializedHealthPackages";
import About from './About'

function Home() {
  const containerStyles = {
    width: "100%",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>

      <Crousels />
      </div>

        <TestAndPackages />

        <SpecializedHealthPackages/>

        <About/>

    </div>
  );
}

export default Home;
