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

        <div className="about_content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3+Year Working</small>
            </article>

            <article className="about__card">
              <HiUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <AiTwotoneFolderOpen className="about_icon"/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, ipsa dolore iure voluptatem doloremque quia sapiente eum totam temporibus, quos magni, voluptatibus laboriosam commodi vitae consequatur officia cum dicta amet.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
        </div>
       </div>
    </section>
  )
}

export default About
