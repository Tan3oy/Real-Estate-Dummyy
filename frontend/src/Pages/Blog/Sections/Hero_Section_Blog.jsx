import React from 'react'
import BreadCrumbs from '../../../Components/BreadCrumbs'

const Hero_Section_Blog = () => {
  return (
    <section id='hero_blog' className='bg-blog-hero-image bg-no-repeat bg-cover bg-center [border-image:linear-gradient(#0b2c3d70,#0b2c3d70)_fill_1]'>
    <div className=" pt-40 pb-44 w-full ">
      <h1 className='text-4xl font-bold text-white text-center mb-6'>Blog</h1>
      <h2 className='flex justify-center gap-1 text-xl font-medium text-white text-center'><BreadCrumbs/>Blog</h2>
    </div>      
    </section>
  )
}

export default Hero_Section_Blog