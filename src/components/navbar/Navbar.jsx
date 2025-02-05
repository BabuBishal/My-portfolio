import React, { useRef } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import cv from "../../assets/MyCV.pdf";
import menu_open from "../../assets/menu-open.png";
import menu_close from "../../assets/menu-close.png";

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-22rem";
  };

  return (
    <div className="nav-container">
      <div id="navbar" className="navbar">
        <Link smooth to="hero" offset={-150}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <img src={menu_open} onClick={openMenu} alt="" className="menu-open" />
        <ul ref={menuRef} className="nav-menu">
          <img
            src={menu_close}
            alt=""
            onClick={closeMenu}
            className="menu-close"
          />
          <li>
            {" "}
            <Link
              activeClass="active"
              spy={true}
              offset={-150}
              smooth={true}
              to="hero"
              className="nav-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              offset={-120}
              smooth={true}
              to="about"
              className="nav-link"
            >
              <p>About</p>{" "}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              offset={-120}
              smooth={true}
              to="portfolio"
              className="nav-link"
            >
              <p>Portfolio</p>{" "}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-120}
              to="contact"
              className="nav-link"
            >
              <p>Contact</p>{" "}
            </Link>
          </li>
        </ul>

        <a href={cv} download={cv}>
          <div className="nav-resume">Download CV</div>
        </a>
      </div>
      <div className="mobile-backdrop" onClick={closeMenu}></div>
    </div>
  );
};

export default Navbar;
