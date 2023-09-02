import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
import Logo from '../Images/Medibridge-logo.png';
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

const NavBar = () => {

  const [Mobile, setMobile] = useState(false)

  function handleMobile(value) {
      if (value === true) {
          document.body.classList.add('overFlow');
      }
      else{
          document.body.classList.remove('overFlow');
      }
      setMobile(value)

  }
  return (
      <nav className='navbar'>
          <img src={Logo} alt="Medi Bridge" className="logo" />
          <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => handleMobile(false)}>
              <Link to='/'><li>Home</li></Link>
              <Link to='/about'><li>About</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
              <Link to='/skills'><li>Skills</li></Link>
              <Link to='/services'><li>Services</li></Link>
          </ul>
          <button className='mobile-menu-icon' onClick={() => handleMobile(!Mobile)}>
              {Mobile ? (
              <ImCross />
              ) : (
              <FaBars />)}
          </button>
      </nav>
  )
}

export default NavBar
