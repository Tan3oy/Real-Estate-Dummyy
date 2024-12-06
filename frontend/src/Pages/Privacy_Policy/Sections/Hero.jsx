import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id='hero_privacy-policy' className='bg-privacy-policy-hero-image bg-no-repeat bg-cover bg-center [border-image:linear-gradient(#0b2c3d70,#0b2c3d70)_fill_1]'>
    <div className=" pt-40 pb-44 w-full ">
      <h1 className='text-4xl font-bold text-white text-center mb-6'>Privacy Policy</h1>
      <h2 className='text-xl font-medium text-white text-center'><Link to='/'>Home</Link> - Privacy Policy</h2>
    </div>      
</section>
  )
}

export default Hero