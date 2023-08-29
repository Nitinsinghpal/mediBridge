import React, { useState } from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import Lifestyle from './Lifestyle'
import Conditions from './Conditions'
import Alphabet from './Alphabet'

function TestAndPackages() {
  const[showLifestyle, setshowLifestyle] = useState(true)
  const[showConditions,setshowConditions] = useState(false)
  const[showAlphabet,setshowAlphabet] = useState(false)

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
   
    <h1>TestAndPackages</h1>
    <div>
    
    <button name='lifestyle' onClick={handleChange}>lifestyle Disorder</button>
    <button name='condition' onClick={handleChange}>Conditions</button>
    <button name='alphabet' onClick={handleChange}>Alphabet</button>
    {showLifestyle && <Lifestyle/>}
    {showAlphabet && <Alphabet/>}
    {showConditions && <Conditions/>}

    {}
        <hr/>
        
        {/* <Link to='/lifestyle'>lifestyle Disorder</Link>
        <hr/>
        <Link to='/condition'>Condition</Link>
        <hr/>
        
        <Link to='/alphabet'>Alphabet</Link> */}

    </div>
    </>
  )
}

export default TestAndPackages