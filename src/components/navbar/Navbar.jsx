import React, { useRef } from 'react'
import { Link } from 'react-scroll'
import "./Navbar.css"
import logo from '../../assets/Logo.png'
import cv from '../../assets/CV.pdf'
import menu_open from '../../assets/menu-open.png'
import menu_close from '../../assets/menu-close.png'

const Navbar = () => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-22rem";
  }

  return (
    <div id='navbar' className='navbar'>
      <img src={logo} alt="logo" className='logo'/>
      <img src={menu_open} onClick={openMenu} alt="" className='menu-open'/>
      <ul ref={menuRef}  className="nav-menu">
      <img src={menu_close} alt="" onClick={closeMenu} className='menu-close'/>
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