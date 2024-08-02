import React from 'react'
import "./Navbar.css"
import logo from '../../assets/Logo.png'
import { useState } from 'react'

const Navbar = () => {

  const [menu, setMenu] = 'home';

  return (
    <div id='navbar' className='navbar'>
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li onClick={() => {setMenu("home")}}> <p>Home</p>{ menu=="home"? <hr /> : ""} </li>
        <li onClick={() => {setMenu("about")}}><p>About</p>{ menu=="about"? <hr />: ""}</li>
        <li onClick={() => {setMenu("portfolio")}}><p>Portfolio</p>{ menu=="portfolio"? <hr/> : ""}</li>
        <li onClick={() => {setMenu("contact")}}><p>Contact</p>{ menu=="contact"? <hr/> : ""}</li>
      </ul>
      <div className="nav-resume">Download CV</div>

    </div>
  )
}

export default Navbar