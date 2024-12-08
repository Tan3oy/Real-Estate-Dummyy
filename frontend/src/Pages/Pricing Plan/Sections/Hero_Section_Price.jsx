import React from 'react'
import BreadCrumbs from '../../../Components/BreadCrumbs'

export const Hero_Section_Price = () => {
  return (
    <section id='hero_about' className='bg-pricing-hero-image bg-no-repeat bg-cover bg-center [border-image:linear-gradient(#0b2c3d70,#0b2c3d70)_fill_1]'>
    <div className=" pt-40 pb-44 w-full ">
      <h1 className='text-4xl font-bold text-white text-center mb-6'>Pricing Plan</h1>
      <h2 className='flex justify-center text-[8px] md:text-sm lg:text-lg font-medium text-white text-center'><BreadCrumbs/>&nbsp;-&nbsp;Pricing Plan</h2>
    </div>      
</section>
  )
}
