import React from 'react'
import BreadCrumbs from '../../../Components/BreadCrumbs'

const Hero_Property = () => {
  return (
    <>
      <section id='hero_FAQ' className='bg-property-hero-image bg-no-repeat bg-cover bg-center [border-image:linear-gradient(#0b2c3d70,#0b2c3d70)_fill_1]'>
        <div className=" pt-40 pb-44 w-full ">
          <h1 className='text-4xl font-bold text-white text-center mb-6'>Properties</h1>
          <h2 className='flex justify-center text-[8px] md:text-sm lg:text-lg font-medium text-white text-center'><BreadCrumbs/></h2>
        </div>      
      </section>
    </>
  )
}

export default Hero_Property