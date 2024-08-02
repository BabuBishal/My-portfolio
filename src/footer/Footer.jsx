import React from 'react'
import './Footer.css'
import logo from '../assets/logo_dark.png'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <img src={logo} alt="" />
            <p>I am a frontend developer. I can create beautiful webpages and applications using JavaScript and React.</p>

        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
            <p><span>2024</span> Bishal Babu Bohara</p>

            </div>
            <div className="footer-bottom-right">
                <img src="" alt="facebook" />
                <img src="" alt="Twitter" />
                <img src="" alt="LinkedIn" />
                <img src="" alt="Github" />

            </div>

        </div>
    </div>
  )
}

export default Footer