import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';



const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure your Better Future & your Dreams</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, reiciendis. Eveniet a, cupiditate illum explicabo tempora nesciunt esse facere rem nihil autem eius
        </p>
       <button className='btn'><Link to='about' smooth={true} offset={-150} duration={500}>Let's explore more <img src={dark_arrow} alt="" /></Link></button>
      </div>
    </div>
  )
}

export default Hero