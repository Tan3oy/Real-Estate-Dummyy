import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link, useSearchParams} from 'react-router-dom'
// import {Property_Cards_data} from '../../../../Constants/All_Properties_data'
import { RiHotelBedLine } from "react-icons/ri"
import { FaShower } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


const Property_cards = () => {
  // const [propertyCards , setPropertyCards]=useState([])
  const [filteredCards, setFilteredCards] = useState([]); //...&balcony=true&alchohol=false..
//const balcony = searchParams.get("balcony")===true ?"balcony":""
  const [searchParams]= useSearchParams()
  const keyword= searchParams.get("keyword")===null ? "": searchParams.get("keyword")
  const type= searchParams.get("type")===null ? "": searchParams.get("type")
  console.log(`type`, type);
  const price = searchParams.get("price") === null ? "" : Number(searchParams.get("price"))
  console.log(`price=`, price);
  const balcony= searchParams.get("balcony")===true ? "balcony":"" 
  const location = searchParams.get("location")==null ? "": searchParams.get("location")
  const purpose= searchParams.get("purpose")=== null || searchParams.get("purpose")=="any" ? "":  searchParams.get("purpose")
  console.log("purpose", purpose);
  

  useEffect(()=>{
    axios.get("http://localhost:5000/api/allproperties")
      .then((res)=>
        {
          const propertyCards=res.data
          if (keyword.length > 0 || type.length > 0 || purpose.length > 0 || location.length >0 || price > 0) {
            const filtered = propertyCards.filter((item) =>(
              item.propertyType.toLowerCase().includes(type.toLowerCase())&& 
              item.speciality.toLowerCase().includes(keyword.toLowerCase())&&
              (item.price === price || price === 0)&&
              item.label.some((labelItem)=> labelItem.toLowerCase().includes(purpose.toLowerCase()))&&
              item.address.toLowerCase().includes(location.toLowerCase())&&
              item.aminities.some((item)=>item.toLowerCase().includes(balcony.toLowerCase()))
            )
            );
            console.log(`filtered`, filtered);
            
            setFilteredCards(filtered);
          } else {
            // Reset to all properties when search is empty
            setFilteredCards(propertyCards);
          }
        })
      .catch((err)=>console.log(err))
  },[keyword,type,location,purpose,price])

  const setViewFilter = () => {
    const sortedCards=[...filteredCards].sort((a,b)=>a.view-b.view)
    console.log(sortedCards);    
    setFilteredCards(sortedCards)
    console.log(filteredCards); 
  }
  const setFeaturedFilter=()=>{
    const featuredCards=[...filteredCards].filter((item)=>item.featured===true)
    console.log(featuredCards);
    setFilteredCards(featuredCards)
  }
  const setUrgentFilter=()=>{
    const urgentCards=[...filteredCards].filter((item)=>item.label.some((labelItems)=>labelItems.toLowerCase().includes("urgent")))    
    setFilteredCards(urgentCards)
  }
  
  return (
    <div className='px-4 sm:w-[576px]  md:w-[80%] xl:w-[70%] mx-auto md:m-0 '>
      <div className="py-10 flex justify-center">
        <button type="button" className='rounded-md p-4 bg-slate-300' onClick={()=>setViewFilter()}>onViews</button>
        <button type="button" className='rounded-md p-4 bg-slate-300' onClick={()=>setFeaturedFilter()}>Featured</button>
        <button type="button" className='rounded-md p-4 bg-slate-300' onClick={()=>setUrgentFilter()}>Urgent</button>
      </div>
      <div className="flex flex-col gap-8 mb-8">
        {
        filteredCards.map((items,index)=>(
        <div className="card-wrapper lg:flex lg:gap-2 lg:justify-between p-4 h-fit shadow-[0px_1px_10px_1px_#97999db8] rounded-md" key={index}>
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
                    <Link to={`/all_properties/${items._id}`}>
                        <button
                            className='mx-auto w-40 h-11 rounded-[3px]
                                bg-[#093B55] text-white font-medium text-[17px]
                                relative
                                z-[1] overflow-hidden

                                before:transition-all before:duration-500 before:ease-in-out
                                before:content-[" "]
                                before:absolute
                                before:top-0 before:left-0
                                before:bg-[#27ae60]
                                before:h-full before:w-0
                                before:z-[-1] 
                                before:opacity-0

                                hover:before:w-full
                                hover:before:opacity-100'>
                              View Details
                        </button>
                    </Link>
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
        ))
      }
      </div>
    </div>
  )
}

export default Property_cards