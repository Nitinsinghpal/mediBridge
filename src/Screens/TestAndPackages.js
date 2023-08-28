import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import Lifestyle from './Lifestyle'
import Conditions from './Conditions'
import Alphabet from './Alphabet'

function TestAndPackages() {
  return (
    <>
   
    <h1>TestAndPackages</h1>
    <div>
        <Routes>
        <Route path="/lifestyle" element={<Lifestyle/>}/>
<Route path="/condition" element={<Conditions/>}/>
<Route path="/alphabet" element={<Alphabet/>}/>
        </Routes>
   
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