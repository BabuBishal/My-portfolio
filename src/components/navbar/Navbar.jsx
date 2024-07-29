import React from 'react'
import "./Navbar.css"
import logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      {/* <div className="nav-connect">Let's Connect</div> */}

    </div>
  )
}

export default Navbar