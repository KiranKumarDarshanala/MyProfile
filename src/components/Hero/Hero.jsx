import React from 'react'
import './Hero.css'
import profile1 from '../assets/profile-image.png'

const Hero = () => {
  return (
    <div id='home' className="hero-contain">
      <div className='hero '>
        <h1><span>I am Kiran Kumar</span></h1>
        <p>As a recent B.Tech graduate with a strong academic background, I've developed a robust skill set in web development, highlighted by projects such as Amazon, Netflix, and Spotify clones, as well as a food app. Despite being a fresher, I've gained valuable experience through hands-on involvement in both major and minor projects during my college years. My portfolio showcases a blend of creativity, technical expertise, and a passion for crafting seamless digital experiences, reflecting my commitment to excellence and continuous learning in the field of technology.</p>
      </div>
      <img src={profile1} alt="profile" />
    </div>
  )
}

export default Hero
