import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contac from './Components/Contact/Contac'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'



function App() {

  const [playState,setPlayState]=useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>

        <Programs/>
        <About setPlayState={setPlayState}/>
         <Title subTitle='Gallery' title='Campus Photos' />
         <Campus/>
         <Title subTitle='TESTIMONIALS' title='What Student Says'/>
         <Testimonials/>
         <Title subTitle='Contact Us' title='What Student Says'/>
         <Contac/>
         <Footer/>
      </div>
      {/* <Videoplayer playState={playState} setPlayState={setPlayState}/> */}
      
    </div>
  )
}

export default App