import React from 'react'
import NavBar from './NavBar'
import Crousels from './Crousels'
import TestAndPackages from './TestAndPackages'
import './Home.css'

function Home() {
  return (
    <div>
    <NavBar/>
    <Crousels/>
    <div>

    <TestAndPackages/>
    </div>
    </div>
  )
}

export default Home