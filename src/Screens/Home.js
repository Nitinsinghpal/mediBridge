import React from "react";
import NavBar from "./NavBar";
import Crousels from "./Crousels";
import TestAndPackages from "./TestAndPackages";
import "./Home.css";
import About from './About.js'
import SpecializedHealthPackages from "./SpecializedHealthPackages";

function Home() {
  return (
    <div>
      <NavBar />
      <Crousels />
      <div>
        <TestAndPackages />
      </div>
      <div>
        <SpecializedHealthPackages/>
      </div>
      <About/>
    </div>
  );
}

export default Home;
