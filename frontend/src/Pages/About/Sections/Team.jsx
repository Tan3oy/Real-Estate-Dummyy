import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

const Team = () => {
  return (
    <div>
        <section className='mx-28 mt-8 mb-16'>
            <div className='w-5/6 m-auto text-center py-10'>
            <h4 className='text-4xl font-bold'> Our Team</h4>
            <p className='text-xl text-gray-400 mt-[25px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took.</p>
            </div>
            <div className='card-containers gap-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around cursor-pointer'>
               <div className='card-container-1 group'>
               <div className='px-2 py-4 h-[320px] lg:h-full w-[321px] lg:w-full shadow-[0px_0px_10px] shadow-[#c1c1c1] rounded-xl group-hover:scale-110 transition-transform duration-300 ease-in-out group-hover:border-gray-500'>
                    <div className='flex justify-center items-center'>
                        <div className='mt-5 flex justify-center items-center w-[100px] h-[100px] overflow-hidden'>
                            <img src="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731506503/Image_2024-11-13_at_19.11.37_19921db4_szbdgf.jpg" className='rounded-full object-cover w-full h-full' alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center mt-4'>
                        <h1 className='group-hover:text-green-500 text-xl font-bold'>Steven Smith</h1>
                         <p className='font-medium text-green-500'>Lawyear</p>
                    </div>
                    <div className='flex flex-row mt-10 justify-center items-center gap-6'>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-gray-800'>
                    <BsWhatsapp className='text-green-500 text-xl' />
                    </div>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-yellow-200'>
                    <BsFacebook className='text-blue-600 text-xl' />
                    </div>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-yellow-200'>
                    <BsLinkedin className='text-blue-600 text-xl' />
                    </div>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-violet-700'>
                    <BsTwitterX className='text-xl' />
                    </div>

                    </div>
                </div>
               
               </div>
               <div className='card-container-2 group'>
               <div className='px-2 py-4 h-[320px] lg:h-full w-[321px] lg:w-full shadow-[0px_0px_10px] shadow-[#c1c1c1] rounded-xl group-hover:scale-110 transition-transform duration-300 ease-in-out group-hover:border-gray-500'>
                    <div className='flex justify-center items-center'>
                        <div className='mt-5 flex justify-center items-center w-[100px] h-[100px] overflow-hidden'>
                            <img src="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731751530/WhatsApp_Image_2024-11-13_at_19.11.39_96a2ae81_bqlzuu.jpg" className='rounded-full object-cover w-full h-full' alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center mt-4'>
                        <h1 className='group-hover:text-green-500 text-xl font-bold'>David Richard
                        </h1>
                         <p className='font-medium text-green-500'>Teacher</p>
                    </div>
                    <div className='flex flex-row mt-10 justify-center items-center gap-6'>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-gray-800'>
                    <BsWhatsapp className='text-green-500 text-xl' />
                    </div>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-yellow-200'>
                    <BsFacebook className='text-blue-600 text-xl' />
                    </div>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-yellow-200'>
                    <BsLinkedin className='text-blue-600 text-xl' />
                    </div>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-violet-700'>
                    <BsTwitterX className='text-xl' />
                    </div>

                    </div>
                </div>
               
               </div>
               <div className='card-container-3 group'>
               <div className='px-2 py-4 h-[320px] lg:h-full w-[321px] lg:w-full shadow-[0px_0px_10px] shadow-[#c1c1c1] rounded-xl group-hover:scale-110 transition-transform duration-300 ease-in-out group-hover:border-gray-500'>
                    <div className='flex justify-center items-center'>
                        <div className='mt-5 flex justify-center items-center w-[100px] h-[100px] overflow-hidden'>
                            <img src="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731751547/WhatsApp_Image_2024-11-13_at_19.11.39_67978e67_yomvlc.jpg" className='rounded-full object-cover w-full h-full' alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center mt-4'>
                        <h1 className='group-hover:text-green-500 text-xl font-bold'>Matthew Anthony
                        </h1>
                         <p className='font-medium text-green-500'>Founder</p>
                    </div>
                    <div className='flex flex-row mt-10 justify-center items-center gap-6'>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-gray-800'>
                    <BsWhatsapp className='text-green-500 text-xl' />
                    </div>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-yellow-200'>
                    <BsFacebook className='text-blue-600 text-xl' />
                    </div>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-yellow-200'>
                    <BsLinkedin className='text-blue-600 text-xl' />
                    </div>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-violet-700'>
                    <BsTwitterX className='text-xl' />
                    </div>

                    </div>
                </div>
               
               </div>
               <div className='card-container-4 group'>
               <div className='px-2 py-4 h-[320px] lg:h-full w-[321px] lg:w-full shadow-[0px_0px_10px] shadow-[#c1c1c1] rounded-xl group-hover:scale-110 transition-transform duration-300 ease-in-out group-hover:border-gray-500'>
                    <div className='flex justify-center items-center'>
                        <div className='mt-5 flex justify-center items-center w-[100px] h-[100px] overflow-hidden'>
                            <img src="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731506503/Image_2024-11-13_at_19.11.37_19921db4_szbdgf.jpg" className='rounded-full object-cover w-full h-full' alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center mt-4'>
                        <h1 className='group-hover:text-green-500 text-xl font-bold'>Lewandaski</h1>
                         <p className='font-medium text-green-500'>Founder</p>
                    </div>
                    <div className='flex flex-row mt-10 justify-center items-center gap-6'>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-gray-800'>
                    <BsWhatsapp className='text-green-500 text-xl' />
                    </div>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-yellow-200'>
                    <BsFacebook className='text-blue-600 text-xl' />
                    </div>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-yellow-200'>
                    <BsLinkedin className='text-blue-600 text-xl' />
                    </div>
                    <div className='flex justify-center items-center border border-green-500 rounded-full h-[40px] w-[40px]  group-hover:bg-violet-700'>
                    <BsTwitterX className='text-xl' />
                    </div>

                    </div>
                </div>
               
               </div>

                
            </div>
        </section>
    </div>
  )
}

export default Team