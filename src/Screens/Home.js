import React from "react";
import Crousels from "./Crousels";
import TestAndPackages from "./TestAndPackages";
import "./Home.css";
import About from './About.js'
import SpecializedHealthPackages from "./SpecializedHealthPackages";

function Home() {
  return (
    <div>
      <Crousels />
      <div>
        <TestAndPackages />
      </div>
      <div>
        <SpecializedHealthPackages/>
      </div>
    </div>
  );
}

export default Home;
