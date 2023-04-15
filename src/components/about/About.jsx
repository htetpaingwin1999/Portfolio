import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {AiTwotoneFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Me" />
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon"/>
              <h5>Japanese Level</h5>
              <small>N1 Studying</small>
            </article>

            <article className="about__card">
              <HiUsers className="about_icon"/>
              <h5>Certificates</h5>
              <small>4+</small>
            </article>

            <article className="about__card">
              <AiTwotoneFolderOpen className="about_icon"/>
              <h5>IT Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          
          <p>
            A talented Electronic and Communication Engineering student at Myanmar Institute of Information Technology with an unwavering passion for programming and a dedication to mastering the craft.
            I am a passionate learner with a deep love for the Japanese language, who has already achieved the impressive milestone of passing the N3 and N2 levels, and is now pursuing the challenging N1 level with tenacity and enthusiasm.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
        </div>
       </div>
    </section>
  )
}

export default About
