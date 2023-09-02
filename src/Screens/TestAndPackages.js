import React, { useState } from "react";
import Lifestyle from "./Lifestyle";
import Conditions from "./Conditions";
import Alphabet from "./Alphabet";
import "./TestAndPackages.css";

function TestAndPackages() {
  const [showLifestyle, setshowLifestyle] = useState(true);
  const [showConditions, setshowConditions] = useState(false);
  const [showAlphabet, setshowAlphabet] = useState(false);

 

    function handleChange(e) {
      if (e.target.name === "lifestyle") {
        setshowLifestyle(true)
        setshowConditions(false)
        setshowAlphabet(false)
      }else if (e.target.name === "condition") {
        setshowConditions(true)
        setshowAlphabet(false)
        setshowLifestyle(false)
      }else if (e.target.name === "alphabet") {
        setshowAlphabet(true)
        setshowLifestyle(false)
        setshowConditions(false)
      }
    }
  return (
    <>
      <h1 className="firstText">SEARCH TEST AND PACKAGES</h1>
      <div className="maindiv">
        <div className="secondTextRow">
          <button className="btnBorder" name="lifestyle" onClick={handleChange}>
            lifestyle Disorder
          </button>
          <button className="btnBorder" name="condition" onClick={handleChange}>
            Conditions
          </button>
          <button className="btnBorder" name="alphabet" onClick={handleChange}>
            Alphabet
          </button>
        </div>
        <div className="inner">
          {showLifestyle && <Lifestyle />}
          {showAlphabet && <Alphabet />}
          {showConditions && <Conditions />}
        </div>
      </div>
    </>
  );
}

export default TestAndPackages;
