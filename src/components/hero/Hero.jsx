import React from "react";
import "./Hero.css";
import profile from "../../assets/profile_img.jpg";

const Hero = () => {
  return (
    <div id='hero' className="hero">
      <div className="profile">
      <img src={profile} alt="Profile Image" />

      </div>
      <h1><span>I am Bishal Babu Bohara,</span> an aspiring front-end developer.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum non
        vitae, aliquam fuga nulla sit ipsam incidunt maiores amet repudiandae
        eos laborum dicta consequatur provident impedit? Voluptatum eaque sed
        itaque!
      </p>
      <div className="hero-action">
        <div className="hero-connect">Contact Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
