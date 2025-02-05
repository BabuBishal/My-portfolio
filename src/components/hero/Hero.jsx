import React from "react";
import "./Hero.css";
import profile from "../../assets/profile_img.jpg";
import cv from "../../assets/MyCV.pdf";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="profile">
        <img src={profile} alt="Profile Image" />
      </div>
      <h1>
        <span>I am Bishal Babu Bohara,</span> a passionate Frontend Developer
        specializing in JavaScript and React.
      </h1>
      <p>
        Explore my portfolio to see my work and join me on this exciting journey
        of web development!
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <Link smooth to="contact">
            Contact Me
          </Link>
        </div>
        <a href={cv} download={cv}>
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
