import React from 'react'
import './Portfolio.css'
import my_work from '../../assets/my-work-data'
import arrow_icon from '../../assets/arrow-icon.png'

const Portfolio = () => {
  return (
    <div id='portfolio' className='portfolio'>
      <div className="work-title">
        <h1>My Works</h1>
        <hr />
      </div>
      <div className="work-container">
        {my_work.map((work, index)=>{
          return <img key={index} src={work.w_img} alt="" />
        })}
      </div> 
        <div className="work-showmore">
          <p>Show more</p>
          <img src={arrow_icon} alt="" />  
        </div>       
    </div>
  )
}

export default Portfolio