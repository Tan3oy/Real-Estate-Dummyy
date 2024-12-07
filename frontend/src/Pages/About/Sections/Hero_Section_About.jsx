import React from 'react'
import BreadCrumbs from '../../../Components/BreadCrumbs'

const Hero_Section_About = () => {
  return (
    <section id='hero_about' className='bg-about-hero-image bg-no-repeat bg-cover bg-center [border-image:linear-gradient(#0b2c3d70,#0b2c3d70)_fill_1]'>
        <div className=" pt-40 pb-44 w-full ">
          <h1 className='text-4xl font-bold text-white text-center mb-6'>About Us</h1>
          <h2 className='flex gap-1 justify-center text-xl font-medium text-white text-center'><BreadCrumbs/>About</h2>
        </div>      
    </section>
  )
}

export default Hero_Section_About