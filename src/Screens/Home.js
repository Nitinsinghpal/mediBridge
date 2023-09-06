import React from "react";
import Crousels from "./Crousels";
import TestAndPackages from "../Screens/TestAndPackages";
import "./Home.css";
import SpecializedHealthPackages from "../Screens/SpecializedHealthPackages";
import About from "./About";
import Steps from "./Steps";
import Crousel from "./Crousel";
import Crou from "./Crou/Crou";

function Home() {
  const containerStyles = {
    width: "96%",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      {/* <div style={containerStyles}>
        <Crousels />
      </div> */}
      {/* <Crousel/> */}
      <Crou/>
      <TestAndPackages />
      <SpecializedHealthPackages />
      <About />
      <Steps/>
    </div>
  );
}

export default Home;
