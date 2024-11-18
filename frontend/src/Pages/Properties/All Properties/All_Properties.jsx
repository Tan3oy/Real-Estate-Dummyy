import React from 'react'
import Hero_Property from './Sections/Hero_Property'
import Property_cards from './Sections/Property_cards'
import Property_select from './Sections/Property_select'

const All_Properties = () => {
  return (
    <div>
      <Hero_Property/>
      <div className="flex justify-between px-8 py-6 lg:px-4 md:w-[768px] lg:w-[992px] xl:w-[1200px] mx-auto">
      <Property_cards/>
      <Property_select/>
      </div>
    </div>
  )
}

export default All_Properties