import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugiat deserunt tempora officia, rem ipsum debitis, nemo eaque incidunt facere magni ratione blanditiis. Veritatis quos dolorem quibusdam. Minima, facere voluptatibus'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugiat deserunt tempora officia, rem ipsum debitis, nemo eaque incidunt facere magni ratione blanditiis. Veritatis quos dolorem quibusdam. Minima, facere voluptatibus'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugiat deserunt tempora officia, rem ipsum debitis, nemo eaque incidunt facere magni ratione blanditiis. Veritatis quos dolorem quibusdam. Minima, facere voluptatibus'
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugiat deserunt tempora officia, rem ipsum debitis, nemo eaque incidunt facere magni ratione blanditiis. Veritatis quos dolorem quibusdam. Minima, facere voluptatibus'
  }
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testominals</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')} 

        className="container testimonials_container"
       >
      {
        data.map(({avatar,name,review}, index) => {
          return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className="client__name">{name}</h5>
                  <small className="client__review">
                  {review}
                  </small>
              </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials
