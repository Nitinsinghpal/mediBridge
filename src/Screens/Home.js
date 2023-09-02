import React from "react";
import Crousels from "./Crousels";
import TestAndPackages from "../Screens/TestAndPackages";
import "./Home.css";
import SpecializedHealthPackages from "../Screens/SpecializedHealthPackages";

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
