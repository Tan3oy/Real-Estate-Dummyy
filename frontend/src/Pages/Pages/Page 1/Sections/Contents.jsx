import React from 'react'
import { customPagesData1 } from '../../../../Constants/Custom_Pages_data'

const Contents = () => {

  return (
    <div className='p-28'>
      {/* Render paragraphs from customPagesData1 */}
      <div className='mx-auto shadow-[0_0_10px_0_rgba(0,0,0,0.2)] p-6 text-[#848181] leading-relaxed flex flex-col gap-5'>
          {
            customPagesData1.map((items, id) => (
                <p key={id}>{items.para}</p>
            ))
          }
      </div>
    </div>
  )
}

export default Contents