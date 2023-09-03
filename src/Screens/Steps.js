import React from "react";
import Pathology from "../Images/PathologyTest.png";
import Reception from "../Images/Reception.png";
import Report from "../Images/DrCreatReport.png";
import Step1 from "../Images/Step1.png";
import Step2 from "../Images/Step2.png";
import Step3 from "../Images/Step3.png";
import MHB from '../Images/MHB.png'
import "../Screens/Steps.css";

function Steps() {
  return (
    <>
      <div className="wrap">
        <h1>WE MAKE THE PROCESS EASY</h1>
        <div className="container row col-12">
          <div className="col-6 adjustpara">
          <img className="stepImg" src={Step1} alt="Pathology Test" />
            <h2>YOU NEED A PATHOLOGY TEST</h2>
            <div className="para">
              <p>
                Your healthcare provider has given you a request form for a
                pathology test. We accept all pathology request forms at Laverty
                Pathology.
              </p>
            </div>
          </div>
          <div className="col-6 adjParaTwo">
            <img src={Pathology} alt="Pathology Test" />
          </div>
        </div>
      </div>
      <hr/>
      <div className="wrap">
      <div className="container row col-12">
      <div className="col-6 adjustpara">
            <img src={Reception} alt="Pathology Test" />
          </div>
          <div className="col-6 adjParaTwo">
          <img className="stepImg" src={Step2} alt="Pathology Test" />
            <h2>VISIT A COLLECTION CENTRE</h2>
            <div className="para">
              <p>
                Please make sure to bring your request form with you. If you test requires any prior prepration please make sure you have read that.
              </p>
            </div>
          </div>          
        </div>
      </div>
      <hr/>
      <div className="wrap">
      <div className="container row col-12">
          <div className="col-6 adjParaTwo">
          <img className="stepImg" src={Step3} alt="Pathology Test" />
            <h2>GET YOUR RESULTS</h2>
            <div className="para">
              <p>
                In most cases, you will need to return to your healthcare provider to get your results.
              </p>
            </div>
          </div>
          <div className="col-6 adjustpara">
            <img src={Report} alt="Pathology Test" />
          </div>
        </div>
      </div>
      <div className='wrap'>
      <div className="row col-12 backg">
      <div className='col-6 logo'>
        <img src={MHB} />
        </div>
        <div className='col-6 ltext'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Steps;
