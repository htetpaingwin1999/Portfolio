import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* Start of Japanese Language */}
        <article className="service">
          <div className="service__header">
            <h3>Japanese Language</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Offer private Japanese language tutoring sessions for individuals interested in learning the language</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Teach Japanese language courses at language schools or community centers in your area</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Offer conversational Japanese language classes to help individuals improve their speaking and listening skills</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Develop and sell online Japanese language courses or instructional materials</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Provide translation and interpretation services for businesses and individuals seeking to communicate with Japanese-speaking partners or clients</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Work as a freelance Japanese language teacher or tutor, offering your services to students around the world via online platforms for N5 to N2 level</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Volunteer to teach Japanese Language at online.</p>
            </li>
          </ul>
        </article>
        {/* End of Japanese Language */}

        {/* Start of Web Development */}
        <article className="service">
          <div className="service__header">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Website Design and Development: Create custom websites for clients based on their specifications and requirements.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>E-commerce Development: Build online stores that allow businesses to sell their products or services online.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>CMS Development: Create custom content management systems that allow clients to easily manage and update their website content.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Website Maintenance and Support: Provide ongoing website maintenance and support to clients to ensure their website runs smoothly and is kept up to date.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Responsive Design: Develop websites that are optimized for all devices, including desktops, laptops, tablets, and smartphones.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>API Development: Develop and maintain APIs (Application Programming Interfaces) for clients to enable them to interact with other applications and services.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}

        {/* Start of Content Creation */}
        <article className="service">
          <div className="service__header">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Write compelling and persuasive copy for clients' websites, marketing materials, and other collateral.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Create engaging and informative blog posts that attract and retain readers, and help clients establish their brand as an authority in their industry.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Produce and edit videos for clients, including promotional videos, product demos, and educational content.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Social Media Content Creation: Develop content for clients' social media accounts that align with their brand identity and engage their audience.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Develop and produce podcasts for clients, including recording, editing, and publishing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Create visually appealing infographics that convey complex information in an easy-to-understand way.</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services
