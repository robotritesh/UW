import React from 'react'
import './Footer.css'
import long from '../../assets/footer.jpg'

const Footer = () => {
  return (
    
    <div className="cont">
      <div className='footer'>
        <p>Copyright © 2023 PTSN University All Rights Reserved.</p>
      <ul>
        <li>Term & condition</li>
        <li>Privacy and Policy</li>
      </ul>
      
    </div>
    <img src={long}alt="" className='long' />
    </div>
  )
}

export default Footer
