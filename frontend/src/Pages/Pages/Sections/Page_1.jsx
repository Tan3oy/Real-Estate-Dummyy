import React from 'react'
import { customPagesData } from '../../../Constants/Custom_Pages_data'

const Page_1 = () => {

  const { para1: para1_1, para2: para2_1, para3: para3_1, para4: para4_1 } = customPagesData.customPagesData1;

  return (
    <div className='p-28'>
      {/* Render paragraphs from customPagesData1 */}
      <div className='mx-auto shadow-[0_0_10px_0_rgba(0,0,0,0.2)] p-6 text-[#848181] leading-relaxed flex flex-col gap-5'>
        <p>{para1_1}</p>
        <p>{para2_1}</p>
        <p>{para3_1}</p>
        <p>{para4_1}</p>
      </div>
    </div>
  )
}

export default Page_1