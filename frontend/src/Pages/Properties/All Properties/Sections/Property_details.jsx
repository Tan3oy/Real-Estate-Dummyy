    import React from 'react'
    import {Property_Cards_data} from '../../../../Constants/All_Properties_data'
    import { CiLocationOn } from "react-icons/ci";
    import { RiHotelBedLine } from "react-icons/ri"
    import { FaShower } from "react-icons/fa";
    import { FaVectorSquare } from "react-icons/fa6";
    import { FaEye } from "react-icons/fa";
    import { FaCommentDots } from "react-icons/fa";
    import { MdDone } from "react-icons/md";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


    const Property_details = () => {
    return (
        <div>
        { 
            Property_Cards_data.map((items,index)=>(
                <div key={index}>
                    <section id='hero_Property' style={{backgroundImage: `url(${items.propertyHero_Image})`}}  className={`bg-no-repeat bg-cover bg-center [border-image:linear-gradient(#0b2c3d70,#0b2c3d70)_fill_1]`}>
                        <div className=" pt-40 pb-44 w-full ">
                        <h1 className='text-4xl font-bold text-white text-center mb-6'>Properties</h1>
                        <h2 className='text-xl font-medium text-white text-center'>Home - Properties -{items.speciality}</h2>
                    </div>      
                    </section>
                    <div className="mx-32 flex justify-evenly gap-6">
                        <div className="property_contact p-4 w-[32%] h-fit border shadow-[0px_0px_8px_0px_#97999db8] ">
                            <div className="contractor_details flex justify-start gap-4 items-center bg-green-600 text-white font-bold p-4 rounded-t-xl mb-7">
                                <div>
                                    <img src="https://demo.websolutionus.com/findestate/uploads/website-images/earl-newell-2021-10-07-08-20-15-5266.jpg" alt='John Doe Image' className='w-[72px] h-fit rounded-[50%]' />
                                </div>
                                <div>
                                    <p className='text-xl font-bold'>John Doe</p>
                                    <div className='flex items-center gap-1'>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <p className='text-[18px] font-normal align-bottom'>admin@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <form className='flex flex-col gap-5'>
                                <div className=" flex flex-col gap-2">
                                    <p className='text-[#093B55] font-medium'>Name</p>
                                    <input type="text" className='p-4 border outline-none border-[#919191] w-full roubded-md' />
                                </div>
                                <div className=" flex flex-col gap-2">
                                    <p className='text-[#093B55] font-medium'>Email</p>
                                    <input type="text" className='p-4 border outline-none border-[#919191] w-full roubded-md' />
                                </div>
                                <div className=" flex flex-col gap-2">
                                    <p className='text-[#093B55] font-medium'>Phone</p>
                                    <input type="text" className='p-4 border outline-none border-[#919191] w-full roubded-md' />
                                </div>
                                <div className=" flex flex-col gap-2">
                                    <p className='text-[#093B55] font-medium'>Description</p>
                                    <textarea name="" id="" rows="10" className='border outline-none border-[#919191] roubded-md h-24 w-full'></textarea>
                                </div>                               
                            </form>
                        </div>
                        <div className="Property-details p-4 w-[68%] h-fit border shadow-[0px_0px_8px_0px_#97999db8]">
                            <div className="propert-intro">
                                <div className="property-labels flex gap-3">
                                    <div className="flex items-center gap-3">
                                        {
                                            items.label.map((item,index)=>(
                                            <span key={index} className='px-2 py-1 rounded-md text-[#27AE60] text-xl font-bold bg-[#FEECE5] mb-4'>{item}</span>
                                        ))
                                        }
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='text-2xl font-semibold mb-2'>{items.speciality}</h1>
                                    <p className='flex items-center gap-1 text-[#838383] mb-2'>
                                        <span><CiLocationOn className='text-xl'/></span>
                                        <span className=' text-base'>{items.address}</span>
                                    </p>
                                    <p className='text-[#27AE60] text-2xl font-bold mb-4'>$ {items.price}</p>
                                    <div></div>
                                </div>
                                <div className='flex gap-6 text-slate-600 mb-5'>
                                    <p className='flex items-center gap-1'>
                                        <span className='border shadow-[0px_0px_5px_1px] shadow-[#dcdada] bg-[#F3F7FD] p-[4px] rounded-full'><RiHotelBedLine/></span>
                                        <span>{items.bedrooms} Bed</span>
                                    </p>
                                    <p className='flex items-center gap-1'>
                                        <span className='border shadow-[0px_0px_5px_1px] shadow-[#dcdada] bg-[#F3F7FD] p-[4px] rounded-full'><FaShower/></span>
                                        <span>{items.bathrooms} Bath</span>
                                    </p>
                                    <p className='flex items-center gap-1'>
                                        <span className='border shadow-[0px_0px_5px_1px] shadow-[#dcdada] bg-[#F3F7FD] p-[4px] rounded-full'><FaVectorSquare/></span>
                                        <span>{items.area} Sqft</span>
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <button className='px-5 py-2 bg-[#27ae60] text-white text-xl font-semibold rounded-md'>Add to Wishlist</button>
                                    <div className='flex justify-between items-center gap-3'>
                                        <div className="review flex items-center h-fit gap-2 px-2 py-1 rounded-sm bg-[#EEEEEE]">
                                            <span><FaCommentDots/></span>
                                            <span className='text-sm'>Add Review</span>
                                        </div>
                                        <div className="view flex items-center h-fit gap-2 px-2 py-1 rounded-sm bg-[#EEEEEE]">
                                            <span><FaEye/></span>
                                            <span className='text-sm'>{items.view}</span>
                                        </div>
                                        {
                                            items.featured && (
                                            <div className="featured flex items-center h-fit gap-2 px-2 py-1 rounded-sm bg-[#447bff] text-white">
                                                <span><MdDone/></span>
                                                <span className='text-sm'>Featured</span>
                                            </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    )
    }

    export default Property_details