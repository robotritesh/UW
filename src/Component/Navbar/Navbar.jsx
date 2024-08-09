import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {
const[sticky,setSticky]= useState(false);
 useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY>50? setSticky(true) : setSticky(false);
  })
 },[]);
    const[mobileMenu,setMobileMenu]= useState(false);
  const toggleMenu =()=>{
 mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }
  return (
    <div>
      <nav className={`container ${sticky ? 'dark-nav':''}`}>
        <div className='logoname'><img src={logo} alt="" className='logo' />पंडित एस. एन. शुक्ला विश्वविद्यालय <br/>Pandit SN Shukla University</div>
        <ul className={mobileMenu?'':'mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
          <li><Link to='programs' smooth={true} offset={-260} duration={500} >Cousres</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500} >About us</Link> </li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>
          <li><Link to='enroll' smooth={true} offset={-260} duration={500} >Enroll</Link></li>
          <li> <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link>  </li>
          
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
      </nav>
    </div>
  )
}

export default Navbar