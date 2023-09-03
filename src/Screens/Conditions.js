import React from "react";
import Liv from '../Images/liver.png'
import Lungs from '../Images/lungs.png'
import Kidney from '../Images/Kidney.png'
import CBC from '../Images/CBC.png'
import Thyroid from '../Images/Thyroid.png'
import Fertility from '../Images/firtility.png'
import '../Screens/TestAndPackages.css'

function Conditions() {
  return (
    <div className='adjust'>
      <div className='imgFix'>
        <span>
          <img src={Liv} alt="Liver" title="Liver"/>
        </span>
      </div>
      <div className='imgFix'>
        <span>
          <img src={Kidney} alt="Kidney" title="Kidney"/>
        </span>
      </div>
      <div className='imgFix'>
        <span>
          <img src={Lungs} alt="Lungs" title="Lungs"/>
        </span>
      </div>
      <div className='imgFix'>
        <span>
          <img src={Thyroid} alt="Thyroid" title="Thyroid"/>
        </span>
      </div>
      <div className='imgFix'>
        <span>
          <img src={CBC} alt="CBC" title="CBC"/>
        </span>
      </div>
      <div className='imgFix'>
        <span>
          <img src={Fertility} alt="Fertility" title="Fertility"/>
        </span>
      </div>
    </div>
  );
}

export default Conditions;
