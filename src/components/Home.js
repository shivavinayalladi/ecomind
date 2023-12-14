import React from 'react'
import Navbar from './Navbar'
import Container from './Container'
import Section from './Section'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Footer from './Footer'
import './style.css'


function Home() {
  return (
    <div className='home-body'>
        <Navbar/>
        <Container/>
        <Section/>
        <Testimonials/>
        <FAQ/>
        <Footer/>
        {/* <h1>HOME</h1> */}
    </div>
  )
}

export default Home