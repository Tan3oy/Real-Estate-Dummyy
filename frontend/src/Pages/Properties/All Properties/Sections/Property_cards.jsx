import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import {Property_Cards_data} from '../../../../Constants/All_Properties_data'
import { RiHotelBedLine } from "react-icons/ri"
import { FaShower } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Property_cards = () => {
  const [propertyCards , setPropertyCards]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/api/allproperties")
      .then((res)=>setPropertyCards(res.data))
      .catch((err)=>console.log(err))
  },[])
  return (
    <div className='px-4 sm:w-[576px] flex flex-col gap-8 md:w-[80%] xl:w-[70%] mx-auto md:m-0 '>
      {
        propertyCards.length>0 && propertyCards?(propertyCards.map((items,index)=>(
        <div className="card-wrapper lg:flex lg:gap-2 lg:justify-between p-4 h-fit shadow-[0px_1px_10px_1px_#97999db8] rounded-md">
            <div className="model-pic h-64 xl:h-72 w-full lg:w-[50%] rounded-md overflow-hidden">
              <img src={items.imgUrl} className='object-cover h-full w-full' />
            </div>
            <div className="model-details divide-y-[1px] lg:w-[46%] divide-[#91919167]">
                <div className="flex justify-between text-[#27AE60] pt-4 pb-2">
                  <span className='font-semibold text-lg '>{items.propertyType}</span>
                  <span className='text-xl font-bold'>$ {items.price}</span>
                </div>
                <div className="flex flex-col gap-8">
                  <h1 className='text-2xl font-bold pt-4'>{items.speciality}</h1>
                  <div className='flex justify-between text-[#919191]'>
                    <p className='flex items-center gap-1'>
                      <RiHotelBedLine/>
                      <span>{items.bedrooms} Bed</span>
                    </p>
                    <p className='flex items-center gap-1'>
                      <FaShower/>
                      <span>{items.bathrooms} Bath</span>
                    </p>
                    <p className='flex items-center gap-1'>
                      <FaVectorSquare/>
                      <span>{items.area} Sqft</span>
                      </p>
                  </div>
                  <div className='button-place flex items-center justify-between pt-4'>
                    <Link to={`/all_properties/${items._id}`}><button className='px-6 py-3 rounded-md bg-[#0B2C3D] font-bold text-white'>View Details</button></Link>
                    <div className='flex items-center'>
                      <div className="ratings-container flex items-center gap-1 pr-2">
                      {
                        [...Array(5)].map((_,index)=>(
                          <span key={index}>
                            {index < Math.trunc(items.rating)?(
                            <FaStar className=' text-[#e1c760eb]'/>):index===Math.trunc(items.rating) && items.rating % 1 === 0.5 ?(<FaStarHalfAlt className=' text-[#e1c760eb]'/>):(<FaRegStar className=' text-[#e1c760eb]'/>)}
                          </span>))
                      }
                      </div>
                      <span className='px-3 rounded-sm text-green-700 font-bold bg-[#DEE9F9]'>{items.rating}</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        ))):(
          <p className='pt-40'>No Property</p>
        )
      }
    </div>
  )
}

export default Property_cards