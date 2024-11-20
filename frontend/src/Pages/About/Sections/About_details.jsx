import React from 'react'

const About_details = () => {
  return (
    <section className='pt-10'>
        <div className='m-auto flex px-4 flex-col lg:flex-row gap-6 sm:w-[540px] md:w-[696px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]'>
            <div className='Image-Container w-[100%] lg:w-[50%]' >
            <img src="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731744422/property-thumb-2021-10-18-09-34-39-5668_bdq78z.jpg"  className='object-cover h-full w-full rounded-md' alt="" />
            </div>
            <div className='flex  bg-[#0e2a3a] h-[56px] w-[290px]'>
              <button className='py-3 px-6 text-white font-semibold hover:bg-green-500'>About</button>
              <button className='py-3 px-6 text-white font-semibold hover:bg-green-500 transition duration-300'>Service</button>
              <button className='py-3 px-6 text-white font-semibold hover:bg-green-500 transition duration-300'>History</button>
        </div>
      </div>
    </section>



  )
}

export default About_details