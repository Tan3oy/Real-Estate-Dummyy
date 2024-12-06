import React from 'react'
import { termsAndConditionsData } from '../../../Constants/Terms_And_Conditions_data'

const Content = () => {
  return (
    <div className='p-28'>
      {/* Render paragraphs from termsAndConditionsData */}
      <div className='mx-auto shadow-[0_0_10px_0_rgba(0,0,0,0.2)] p-6 text-[#848181] leading-relaxed flex flex-col gap-5'>
          {
            termsAndConditionsData.map((items, id) => (
                <p key={id}>{items.para}</p>
            ))
          }
      </div>
    </div>
  )
}

export default Content