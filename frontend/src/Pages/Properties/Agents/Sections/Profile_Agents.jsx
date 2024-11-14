import React, { useState } from 'react'
import { AgentData } from '../../../../Constants/Agent_data1'
import { FaFacebook ,FaTwitter,FaWhatsapp,FaLinkedin } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6"
import { CiLocationOn } from "react-icons/ci"

const Profile_Agents = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4; // Number of cards per page

  // Calculate the number of pages
  const totalPages = Math.ceil(AgentData.length / cardsPerPage);

  // Get the cards for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = AgentData.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Icons array for social links
  const icons=[<FaFacebook/>,<FaTwitter/>,<FaWhatsapp/>,<FaLinkedin/>]

  return (

    <div className="">
        {/* Code for Cards */}
        <div className="agent-card-container sm:w-[36rem] md:w-[48rem] lg:w-[62rem] xl:w-[75rem] flex flex-wrap gap-y-6 mx-auto py-11">
              {
                currentCards.map((item,index) =>
                  (
                      <div key={index} className="agent-card rounded-lg bg-white shadow-lg sm:w-[46%] lg:w-[21%] xl:w-[23%] shadow-slate-500 mx-auto">
                          <div className="dp w-full h-auto px-4 pt-4">
                              <img src={item.image} className="object-cover rounded-t-md h-full w-full" />                                      
                          </div>
                          <div className="agent-links flex justify-between bg-[#0B2C3D] px-6 py-4 mb-2 w-full">
                              {
                                icons.map((items,i) =>
                                  (
                                    <div className="icon-wrapper p-2 rounded-full bg-white text-green-700 " key={i}>{items}</div>
                                  ))
                              }
                          </div>
                          <div className="agent-card-body flex flex-col gap-4 items-center justify-center px-5 xl:px-6">
                              <div className="agent-details  flex flex-col gap-1 items-center justify-center ">
                                  <div className=' text-xl md:text-2xl lg:text-lg xl:text-2xl h-8 font-bold text-center'>{item.name}</div>
                                  <span className="agent-address h-10 lg:h-12 xl:h-14 text-sm xl:text-base flex gap-1">
                                      <span><CiLocationOn className='mt-1'/></span>
                                      <span className=''>{item.address}</span>
                                  </span>
                              </div>
                              <button className="abcd outline-none mb-5 lg:mb-4 text-base md:text-lg lg:text-base flex flex-row justify-center items-center gap-2 px-4 py-2 bg-green-500 rounded-md text-white font-semibold">
                                <FaRegEye />
                                <div className="button-txt">View Profile</div>
                              </button>
                          </div>
                      </div>
                  ))
              }  
        </div>

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
  )
}

export default Profile_Agents