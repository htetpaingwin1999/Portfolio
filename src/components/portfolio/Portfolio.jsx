import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'HR Management System',
    programming: 'Laravel',
    github: 'https://github.com/htetpaingwin1999/Smart-HR-Management-System',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Student Management System',
    programming: 'Java SE',
    github: 'https://github.com/htetpaingwin1999/Student-Management-System',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Article Management System',
    programming: 'PHP',
    github: 'https://github.com/htetpaingwin1999/Article-Blog',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Ecommerce Admin View',
    programming: 'Next Js',
    github: 'https://github.com/htetpaingwin1999/Ecommerce-For-Admin-View',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Ecommerce Client View',
    programming: 'Next Js',
    github: 'https://github.com/htetpaingwin1999/Ecommerce-For-Customer-View',
  },
 
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github})=>{
            return(
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn btn-primary">Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
