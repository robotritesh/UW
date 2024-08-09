import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/programs/Programs'
import Tital from './Component/Tital/Tital'
import About from './Component/About/About'
import Campus from './Component/cumpus/Campus'
import Enroll from './Component/Enroll/Enroll'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import VideoPlayer from './Component/videoplayer/VideoPlayer'


const App = () => {
  const [playState,setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <Tital subTital='Our Courses' tital=' What We Offer' />
         <Programs/>
         <About setPlayState={setPlayState}/>
         <Tital subTital='What HERE' tital=' Cumpus Photos' />
         <Campus/>
         <Tital subTital= "lets Enroll" tital=' For the Online Exam' />
          <Enroll/> 
          <Tital subTital= "Contact us " tital='Get in Touch' />
          <Contact/>
          <Footer/>
          

      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App