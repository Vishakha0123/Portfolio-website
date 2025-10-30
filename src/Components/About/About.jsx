import React from 'react'
import './About.css'

import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>

        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>A passionate Computer Science graduate eager to kickstart a career in software development. I enjoy building clean, user-friendly applications and continuously learning new technologies. My focus is on creating impactful projects that combine problem-solving with creativity</p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"90%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>REACT JS</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JAVASCRIPT</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>NEXT JS</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JAVA</p><hr style={{width:"80%"}}/>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="about-achievements">
            <div className="about-achievement">
                <h1>Completed an internship at Bharat Intern</h1>
                <p>where I gained hands-on experience in web development and built responsive projects using React and JavaScript.</p>
            </div>
        </div> */}
    </div>
  )
}

export default About