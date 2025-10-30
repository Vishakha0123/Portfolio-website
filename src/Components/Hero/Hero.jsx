import React from 'react'
import './Hero.css'
import profile_img from '../../assets/resized_profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Vishakha Kaushal,</span> Eager to learn and build impactful software solutions.</h1>
        {/* <p>A passionate Computer Science graduate eager to kickstart a career in software development. I enjoy building clean, user-friendly applications and continuously learning new technologies. My focus is on creating impactful projects that combine problem-solving with creativity</p> */}
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">
              <a href="/RESUME.pdf" target='_blank' rel='noopener noreferrer'>
              My resume
              </a>
              </div>
        </div>
    </div>
  )
}

export default Hero