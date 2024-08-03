import React from 'react'
import { Link } from 'react-scroll'
import "./Navbar.css"
import logo from '../../assets/Logo.png'
import { useState } from 'react'
import cv from '../../assets/CV.pdf'

const Navbar = () => {

  return (
    <div id='navbar' className='navbar'>
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li > <Link activeClass='active' smooth to="hero">Home</Link></li>
        <li ><Link activeClass='active' smooth  to="about"><p>About</p> </Link></li>
        <li ><Link activeClass='active' smooth  to="portfolio"><p>Portfolio</p> </Link></li>
        <li ><Link activeClass='active' smooth  to="contact"><p>Contact</p> </Link></li>
      </ul>
     
        <a href={cv} download={cv}>
        <div className="nav-resume">Download CV
        </div>
        </a>
      

    </div>
  )
}

export default Navbar