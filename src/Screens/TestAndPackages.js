import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import Lifestyle from './Lifestyle'
import Conditions from './Conditions'
import Alphabet from './Alphabet'

function TestAndPackages() {
    function handleChange(params) {
        alert(params)
    }
  return (
    <>
   
    <h1>TestAndPackages</h1>
    <div>
    
    <button onClick={handleChange}>lifestyle Disorder</button>
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