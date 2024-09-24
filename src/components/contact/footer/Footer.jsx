import React from 'react'
import './Footer.css'
import logo from '../../assets/logo_dark.png'
import facebook_logo from'../../assets/facebook.png'
import twitter_logo from'../../assets/twitter.png'
import linkedin_logo from'../../assets/linkedin.png'
import github_logo from'../../assets/github.png'




const Footer = () => {

  const date = new Date();

  return (
    <div id='footer' className='footer'>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <img src={logo} alt="" />
              <p>&copy;<span>{date.getFullYear()}</span> Bishal Babu Bohara</p>
            </div>
            <div className="footer-bottom-right">
              <a href="https://www.facebook.com/profile.php?id=100009237413333"><img src={facebook_logo} alt="facebook" /></a>
              <a href="https://x.com/Bishalbabu1011"><img src={twitter_logo} alt="twitter" /></a>
              <a href="https://www.linkedin.com/in/bishal-babu-bohara-0954b52ba"><img src={linkedin_logo} alt="linkedin" /></a>
              <a href="https://www.github.com/BabuBishal"><img src={github_logo} alt="github" /></a>            
             
            </div>

        </div>
    </div>
  )
}

export default Footer