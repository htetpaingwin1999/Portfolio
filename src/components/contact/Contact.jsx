import React from 'react'
import './contact.css'
import {MdAttachEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.sendForm('service_lipgrau', 'template_j5umgzv', form.current, 'TZik3nfBTm1n151_j');

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      {/* Start of Contact Options */}
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <MdAttachEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>htetpaingwin1999@gmail.com</h5>
              <a href="mailto:htetpaingwin1999@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
              <BsMessenger className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Htet Paing</h5>
              <a href="https://www.facebook.com/profile.php?id=100067911693531" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
              <IoLogoWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+959 799136751</h5>
              <a href="https://api.whatsapp.com/send?phone=+959799136751" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options */}
     
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
