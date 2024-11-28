import React from 'react'
import Hero_Property from './Sections/Hero_Property'
import Property_cards from './Sections/Property_cards'
import Property_select from './Sections/Property_select'

const Featured_Properties = () => {
  return (
    <div>
      {/* <Hero_Property/> */}
      <div className="flex justify-between px-8 py-6 lg:px-4 md:w-[768px] lg:w-[992px] xl:w-[1200px] mx-auto">
      <Property_select containerStyle="hidden md:block xl:w-[28%]" formStyle="border shadow-[0px_0px_8px_0px_#97999db8]"/>
      <Property_cards />
      </div>
    </div>
  )
}

export default Featured_Properties