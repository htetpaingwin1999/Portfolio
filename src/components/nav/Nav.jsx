import React from 'react'
import './nav.css'
import {AiFillHome,AiOutlineUser,AiFillBook} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import {FaBook} from 'react-icons/fa'
import {MdContactEmergency} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <div>
      <nav>
        <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
        <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactEmergency /></a>

      </nav>
    </div>
  )
}

export default Nav
