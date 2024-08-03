import React from "react";
import "./About.css";
import profile from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <hr />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-p">
            <p>
            Hello! I'm Bishal Babu Bohara, a dedicated Frontend Developer with a specialization in JavaScript and React. With a keen eye for detail and a love for crafting seamless user experiences, I transform complex ideas into interactive and visually appealing web applications.  
            </p>
            <p>
            My goal is to bridge the gap between design and technology, bringing creative visions to life through innovative web solutions. I am always eager to learn and adapt to the ever-evolving landscape of web development.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML and CSS</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
