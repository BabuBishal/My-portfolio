import React from "react";
import "./About.css";
import profile from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div className="about">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              consequatur amet voluptatum commodi, iure asperiores, corrupti
              ullam saepe rerum error minus reiciendis voluptas? Placeat,
              numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              voluptatum modi numquam consequatur corrupti quos totam magnam
              sint minus a!
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
