import React from "react";
import NavBar from "./NavBar";
import Crousels from "./Crousels";
import TestAndPackages from "./TestAndPackages";
import "./Home.css";
import SpecializedHealthPackages from "./SpecializedHealthPackages";
import About from "./About";
import Footer from "./Footer";

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
      <div>
        <About/>
      </div>
      <div><Footer/></div>
    </div>
  );
}

export default Home;
