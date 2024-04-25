import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container'>
    <div className='hero-text'>
      <h1>We Ensure Better education for a better world</h1>
      <p>Our cutting-edge curriculam is designed to empower students 
      with the knowledge skill, and exprience need to excel in the dynamic feild of education </p>
      <button className='btn'>Explore more <img src={dark_arrow} alt='' /> </button>
    </div>
      
    </div>
  )
}

export default Hero
