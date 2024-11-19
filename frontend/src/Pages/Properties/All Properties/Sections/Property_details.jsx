    import React,{useState,useEffect} from 'react'
    import axios from 'axios';
    import { useParams } from 'react-router-dom';
    // import {Property_Cards_data} from '../../../../Constants/All_Properties_data'
    import { CiLocationOn } from "react-icons/ci";
    import { RiHotelBedLine } from "react-icons/ri"
    import { FaShower } from "react-icons/fa";
    import { FaVectorSquare } from "react-icons/fa6";
    import { FaEye } from "react-icons/fa";
    import { FaCommentDots } from "react-icons/fa";
    import { MdDone } from "react-icons/md";


    const Property_details = () => {
        const {_id} = useParams()
        const [propertyData, setPropertyData]= useState(null)
        useEffect(()=>{
            axios.get(`http://localhost:5000/api/allproperties/${_id}`)
            .then((res)=>setPropertyData(res.data))
            .catch((err)=>console.log(err))
        },[_id])
        console.log(propertyData);
    return (
        <div>
            {
                propertyData?(
                <>
                    <p>adadsdsds</p>
                    <div>
                        <section id='hero_Property' style={{backgroundImage: `url(${propertyData.propertyHero_Image})`}}  className={`bg-no-repeat bg-cover bg-center [border-image:linear-gradient(#0b2c3d70,#0b2c3d70)_fill_1]`}>
                            <div className=" pt-40 pb-44 w-full ">
                            <h1 className='text-4xl font-bold text-white text-center mb-6'>Properties</h1>
                            <h2 className='text-xl font-medium text-white text-center'>Home - Properties -{propertyData.speciality}</h2>
                        </div>      
                        </section>
                        <div className="flex justify-between">
                            <div className="property_contact p-4 w-[40%] h-fit border shadow-[0px_0px_8px_0px_#97999db8] ">
                                <div className="contractor_details">John Doe</div>
                                <form className='flex flex-col gap-3'>
                                    <div className=" flex flex-col gap-2">
                                        <p>Name</p>
                                        <input type="text" className='p-4 border outline-none border-[#919191] w-full roubded-md' />
                                    </div>
                                    <div className=" flex flex-col gap-2">
                                        <p>Email</p>
                                        <input type="text" className='p-4 border outline-none border-[#919191] w-full roubded-md' />
                                    </div>
                                    <div className=" flex flex-col gap-2">
                                        <p>Phone</p>
                                        <input type="text" className='p-4 border outline-none border-[#919191] w-full roubded-md' />
                                    </div>
                                    <div className=" flex flex-col gap-2">
                                        <p>Description</p>
                                        <textarea name="" id="" rows="10" className='border outline-none border-[#919191] roubded-md h-24 w-full'></textarea>
                                    </div>                               
                                </form>
                            </div>
                            <div className="Property-details p-4 w-[58%] h-fit border shadow-[0px_0px_8px_0px_#97999db8]">
                                <div className="propert-intro">
                                    <div className="property-labels flex gap-3">
                                        <div className="flex items-center gap-3">
                                            {
                                                propertyData.label.map((item,index)=>(
                                                <span key={index} className='px-2 py-1 rounded-md text-[#27AE60] text-xl font-bold bg-[#FEECE5] mb-4'>{item}</span>
                                            ))
                                            }
                                        </div>
                                    </div>
                                    <div className="">
                                        <h1 className='text-2xl font-semibold mb-2'>{propertyData.speciality}</h1>
                                        <p className='flex items-center gap-1 text-[#838383] mb-2'>
                                            <span><CiLocationOn className='text-xl'/></span>
                                            <span className=' text-base'>{propertyData.address}</span>
                                        </p>
                                        <p className='text-[#27AE60] text-2xl font-bold mb-4'>$ {propertyData.price}</p>
                                        <div></div>
                                    </div>
                                    <div className='flex gap-6 text-slate-600 mb-5'>
                                        <p className='flex items-center gap-1'>
                                            <span className='border shadow-[0px_0px_5px_1px] shadow-[#dcdada] bg-[#F3F7FD] p-[4px] rounded-full'><RiHotelBedLine/></span>
                                            <span>{propertyData.bedrooms} Bed</span>
                                        </p>
                                        <p className='flex items-center gap-1'>
                                            <span className='border shadow-[0px_0px_5px_1px] shadow-[#dcdada] bg-[#F3F7FD] p-[4px] rounded-full'><FaShower/></span>
                                            <span>{propertyData.bathrooms} Bath</span>
                                        </p>
                                        <p className='flex items-center gap-1'>
                                            <span className='border shadow-[0px_0px_5px_1px] shadow-[#dcdada] bg-[#F3F7FD] p-[4px] rounded-full'><FaVectorSquare/></span>
                                            <span>{propertyData.area} Sqft</span>
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
                                                <span className='text-sm'>{propertyData.view}</span>
                                            </div>
                                            {
                                                propertyData.featured && (
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
                </>):(
                    <p className='pt-40'>Property Not Found</p>
                )
            }
        </div>
    )
    }

    export default Property_details