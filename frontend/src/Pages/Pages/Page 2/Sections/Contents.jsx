import React from 'react'
import { customPagesData } from '../../../../Constants/Custom_Pages_data'

const Contents = () => {

  const { para1: para1_2, para2: para2_2, para3: para3_2, para4: para4_2 } = customPagesData.customPagesData2;

  return (
    <div className='p-28'>
      {/* Render paragraphs from customPagesData2 */}
      <div className="mx-auto shadow-[0_0_10px_0_rgba(0,0,0,0.2)] p-6 text-[#848181] leading-relaxed flex flex-col gap-5">
        <p>{para1_2}</p>
        <p>{para2_2}</p>
        <p>{para3_2}</p>
        <p>{para4_2}</p>
      </div>      
    </div>
  )
}

export default Contents