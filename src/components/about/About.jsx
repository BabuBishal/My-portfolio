import React from 'react'
import './About.css'
import profile from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-tite">
        <h1>About Me</h1>
        <img src=" " alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
      </div>

    </div>
  )
}

export default About