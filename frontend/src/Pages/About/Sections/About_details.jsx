
import React,{useState} from 'react'
import { motion } from 'framer-motion'
import {tabData} from '../../../Constants/Tabs_data'
const About_details = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const tabName=["About","Service","History"]
  return (
    <section className='pt-10'>
        <div className='m-auto flex px-4 flex-col lg:flex-row gap-6 sm:w-[540px] md:w-[696px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]'>
            <div className='Image-Container w-[100%] lg:w-[50%]' >
            <img src="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731744422/property-thumb-2021-10-18-09-34-39-5668_bdq78z.jpg"  className='object-cover h-full w-full rounded-md' alt="" />
            </div>
            <div className='h-[56px] w-[390px]'>             
              <div className="flex mb-8">
                {
                tabName.map((items,index)=>(
                  <motion.button className={`py-3 px-6 text-white font-semibold hover:bg-green-500
                  ${selectedTab==index?'bg-[#27AE60]':'bg-[#0B2C3D]'} transition-all duration-300`} onClick={()=>setSelectedTab(index) } >  
                    {items}
                  </motion.button>
                ))
                }
              </div>
              <div className="texts">
              { 
              tabData.map((items,i)=>(
                selectedTab==i &&
                <motion.p
                initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:1}}>{items}</motion.p>
                ))
              }
              </div>
                
        </div>
      </div>
    </section>



  )
}

export default About_details