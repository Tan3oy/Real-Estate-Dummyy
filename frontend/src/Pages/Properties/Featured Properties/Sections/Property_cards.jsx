import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import {Link, useSearchParams} from 'react-router-dom'
// import {Property_Cards_data} from '../../../../Constants/All_Properties_data'
import { RiHotelBedLine } from "react-icons/ri"
import { FaShower } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import { filterButtons } from '../../../../Constants/Menu_data';
import Dropdown from '../../../../Components/Select_dropdown';
import Property_select from '../../../../Components/Property_select'
import { queryFilter,buttonFilter } from '../../../../Components/Property_Filters'


const Property_cards = ({fetchedData}) => {
  // const [propertyCards , setPropertyCards]=useState([])
  const [gridView, setGridView] = useState(false)
  const [openForm, setOpenForm] = useState(null)
  const [filteredCards, setFilteredCards] = useState([]); 

  //Fetching Main Cards
  useEffect(() => {
    setFilteredCards(fetchedData);
  }, [fetchedData]);
  
  // Filter by Search Queries
  const handleQuerySearch=(selectData)=>{
    const queryResult= queryFilter(selectData,fetchedData)
    setFilteredCards(queryResult)
    console.log("selectData :: ",selectData);
  }
  
  //Filter by Buttons
  const buttonHandler=(data)=>{
    console.log("button Clicked");
    console.log(data.value);
    setFilteredCards(buttonFilter(data.value,filteredCards))
  }
  
  console.log(filteredCards);
  
  //Pagination controllers

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4; // Number of cards per page

  // Calculate the number of pages
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  // Get the cards for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  return (
    <div className="flex justify-between px-8 py-8 lg:px-4 md:w-[768px] lg:w-[992px] xl:w-[1200px] mx-auto">
      <Property_select containerStyle="hidden md:block xl:w-[28%]" formStyle="border shadow-[0px_0px_8px_0px_#97999db8]" onSearch={handleQuerySearch} />
      <div className='Cards-container px-4 sm:w-[576px] md:w-[80%] xl:w-[70%] mx-auto md:m-0 '>
        <div className="view-controller mb-8">
          <div className="flex justify-between w-full md:border md:border-[#c1c1c1] bg-[#0B2C3D] md:bg-white">
              <div className="md:block hidden w-[40%] lg:w-[30%] border-r border-[#c1c1c1]">
                <Dropdown options={filterButtons} placeholder="Select Type" onChange={(value)=>buttonHandler(value)} />
              </div>
              <div className="md:flex hidden divide-x divide-gray-400 text-xl ">
                <span className={`p-4 flex items-center ${gridView?"":"text-blue-600"}`} onClick={()=>setGridView(false)}><FaListUl/></span>
                <span className={`p-4 flex items-center ${gridView?"text-blue-600":""}`} onClick={()=>setGridView(true)}><FaTh/></span>
              </div>

              <div className="stretch-icon md:hidden text-white flex items-center px-4 bg-blue-600" onClick={()=>setOpenForm((prev)=>!prev)}><ImPlus/></div>
              <div className="text-white font-bold text-xl pr-4 py-3 md:hidden">Find Your Property</div>
          </div>
          <motion.div initial={{height: 0}} animate={{height : openForm?"fit-content":0}} transition={{duration:0.7, ease:"easeInOut"}} className='overflow-hidden shadow-[0px_0px_8px_0px] shadow-[#97999db8] md:shadow-none'><Property_select containerStyle="block md:hidden w-full"/></motion.div>
        </div>
        
        {
          !gridView ? (
          <div className="flex flex-col gap-8 mb-8 ">
          {
          currentCards.map((items,index)=>(
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
          ):
        (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-7 mb-8">
            {
              currentCards.map((items,index)=>(
                <div className="card-wrapper h-fit shadow-[0px_1px_10px_1px_#97999db8] rounded-md" key={index}>
                  <div className="model-pic h-64 xl:h-72 rounded-t-md overflow-hidden">
                    <img src={items.imgUrl} className='object-cover h-full w-full' />
                  </div>
                  <div className="model-details py-4 px-8 divide-y-[1px] divide-[#91919167]">
                    <div className="flex justify-between pb-2">
                      <span className='font-semibold text-[#27AE60] text-lg '>{items.propertyType}</span>
                      <div className="ratings-container flex items-center gap-1 pr-2">
                          {
                            [...Array(5)].map((_,index)=>(
                              <span key={index}>
                                {index < Math.trunc(items.rating)?(
                                <FaStar className=' text-[#e1c760eb]'/>):index===Math.trunc(items.rating) && items.rating % 1 === 0.5 ?(<FaStarHalfAlt className=' text-[#e1c760eb]'/>):(<FaRegStar className=' text-[#e1c760eb]'/>)}
                              </span>))
                          }
                      </div>
                    </div>
                    <div className="flex flex-col gap-6">
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
                      <div className='button-place flex items-center justify-between'>
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
                        <p className='text-3xl text-[#27AE60] font-bold'>$ {items.price}</p>
                      </div>
                    </div>
                  </div>
                </div>              
              ))
            }
          </div>
        )}
        {/* Pagination Control */}
        <div className="pagination flex justify-center items-center gap-2 pb-24 group">
                  <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-1 bg-gray-300 rounded-full disabled:opacity-50"
                  >
                    «
                  </button>

                  {
                      [...Array(totalPages)].map((_, index) =>
                            (
                                  <button
                                        key       = { index }
                                        onClick   = { () => handlePageChange(index + 1) }
                                        className = {
                                                        `px-3 py-1 rounded-full ${ currentPage === index + 1 ? ' outline-[#27ae60] outline outline-1 text-[#27ae60] font-medium group-hover:bg-[#27ae60] group-hover:text-[#fff]' : 'bg-gray-300' }`
                                                    }
                                  >
                                        {index + 1}
                                  </button>
                            ))
                  }
                  
                  <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 bg-gray-300 rounded-full disabled:opacity-50"
                  >
                    »
                  </button>
        </div>
      </div>
    </div>
  )
}

export default Property_cards