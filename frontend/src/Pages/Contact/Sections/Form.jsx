import React from 'react'
import { FaRegUser } from "react-icons/fa";
const Form = () => {
  return (
    <div className='pt-40'>
        <div className='mx-auto p-6 sm:w-[576px] md:w-[768px] lg:w-[992px] xl:w-[1200px]
                flex flex-col xl:flex-row
                gap-8'>
            <div className='mx-auto
                    py-7 px-8 
                    flex flex-col items-center justify-center gap-3
                    w-full h-fit md:w-[48%] xl:w-[39%]
                    rounded-[3%]
                    shadow-[0_2px_10px_rgb(184,192,200)]
                    text-center break-words'>
                <FaRegUser className='text-4xl  text-[#33ac69]' />
                <h2 className='text-[#0a2f3d] text-xl font-medium'>
                    Contact Support
                </h2>
                <div className="support-details divide-y-2">
                    <div className="contact-no py-3">
                        <p className='text-[#757383] text-[17px]'>(347) 430-9510</p>
                        <p className='text-[#757383] text-[17px]'>(587) 860-2590</p>
                    </div>
                    <div className="contact-emails py-3">
                        <p className='text-[#757383] text-[17px]'>support@websolutionus.com</p>
                        <p className='text-[#757383] text-[17px]'>test@gmail.com</p>
                    </div>
                    <div className="contact-address py-3">
                        <p className='text-[#757383] text-[17px]'>95 South Park Avenue, New York, USA</p>
                    </div>
                </div>
                
                
            </div>
            <div className='mx-auto
                    px-8
                    py-7
                    flex flex-col gap-7
                    w-full xl:w-[59%]
                    rounded-[3%]
                    shadow-[0_2px_10px_rgb(184,192,200)]
                    text-center break-words'>
                <h2 className='text-[#0a2f3d] text-2xl font-medium '>
                    Contact Us
                </h2>
                <form className='flex flex-col gap-6 md:grid md:grid-cols-2'>
                    <input
                        type="text" placeholder="Name*"
                        className='w-full h-14
                            shadow-[0px_0.4px_1px_1px_#d8d8d8] rounded-md
                            placeholder:pb-1 focus:outline-none pl-5'
                    />
                            {/* <div className='pt-3 pb-3'></div> */}
                    <input type="text" placeholder="Email*"
                        className='w-full h-14
                            shadow-[0px_0.4px_1px_1px_#d8d8d8] rounded-md
                            placeholder:pb-1 focus:outline-none pl-5'
                    />
                            {/* <div className='pt-3 pb-3'></div> */}
                    <input type="text" placeholder="Subject"
                        className='w-full h-14
                            shadow-[0px_0.4px_1px_1px_#d8d8d8] rounded-md
                            placeholder:pb-1 focus:outline-none pl-5'
                    />
                            {/* <div className='pt-3 pb-3'></div> */}
                    <input
                        type="text" placeholder="Phone"
                        className='w-full h-14
                            shadow-[0px_0.4px_1px_1px_#d8d8d8] rounded-md
                            placeholder:pb-1 focus:outline-none pl-5'
                    />
                            {/* <div className='pt-3 pb-2'></div> */}
                    <textarea
                        rows="4" cols="35" placeholder="Message*"
                        className='w-full
                            md:col-span-2
                            shadow-[0px_0.4px_1px_1px_#d8d8d8] rounded-md
                            focus:outline-none pl-5 pt-3 resize-none'>
                    </textarea>
                </form>
                <button className='mx-auto w-36 h-10 rounded-md
                    bg-green-500 text-white
                    relative
                    z-[1] overflow-hidden

                    before:transition-all before:duration-500 before:ease-in-out
                    before:content-[" "]
                    before:absolute
                    before:top-0 before:left-0
                    before:bg-blue-950 
                    before:h-full before:w-0
                    before:z-[-1] 
                    before:opacity-0

                    hover:before:w-full
                    hover:before:opacity-100'>Send Message
                </button>

            </div>
        </div>
    </div>
    
  )
}

export default Form 