import React from 'react'
import './About.css'
import profile from '../assets/Pro-img.jpg'



const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img className='Profile-stle' src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Despite being a fresher, I have actively participated in numerous projects during my academic tenure, contributing significantly to their development and success. Through hands-on experience and dedication, I have independently built several projects, demonstrating my initiative, problem-solving skills, and ability to work effectively in a team.</p>
            <p>I am deeply passionate about my work, characterized by a strategic and analytical approach to problem-solving, and a keen focus on achieving objectives efficiently and effectively.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
