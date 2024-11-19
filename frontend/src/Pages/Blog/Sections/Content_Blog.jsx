import React,{useEffect ,useState} from "react";
import axios from "axios";

import { BsChatSquareText } from "react-icons/bs";
const Content_Blog = () => {
  const [isOpen,setIsOpen] =useState(null);
  const [Blogs_data, setBlogs_data] = useState([]);
  useEffect(()=>{
      axios
      .get("http://localhost:5000/api/AllBlogs")
      .then((res)=>(
          setBlogs_data(res.data),
          console.log(res.data))
      )
      .catch((err)=>console.log(err))
  },[])
  console.log(Blogs_data)
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // Number of cards per page

  // Calculate the number of pages
  const totalPages = Math.ceil(Blogs_data.length / cardsPerPage);

  // Get the cards for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = Blogs_data.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
       <div className="mx-auto p-8 sm:w-[576px] md:w-[768px] lg:w-[992px] xl:w-[1200px] md:flex md:flex-wrap gap-y-8 justify-between md:gap-x-3">
      {currentCards.map((items, index) => (
        <div className="max-md:mb-8 h-fit md:w-[46%] lg:w-[30%] bg-white shadow-[0_1px_10px_1px] shadow-[#97999db8] rounded-lg overflow-hidden" key={index}>
          {/* Image Section */}
          <div className="relative">
            <div className=" w-full h-56">
              <img
                src={items.image}
                alt="Placeholder"
                className=" object-cover h-full w-full"
              />
            </div>
            <div className="absolute bottom-4 left-4 rounded-md flex items-center overflow-hidden ">
              <span className="bg-[#27AE60] font-bold py-3 px-4 text-white">
                {items.day}
              </span>
              <span className="font-semibold px-6 py-3  bg-white">
                {items.year}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="divide-y-2">
            <div className="px-6 pt-6">
              <div className="flex gap-4 justify-between mb-3">
                <h2 className="text-xl font-bold w-[60%] text-gray-800">{items.title}</h2>
                <div className="flex gap-2 h-fit content-center text-green-600 py-1 px-3 border border-green-600 rounded-md">
                  <span className="flex items-center">
                    <BsChatSquareText />
                  </span>
                  <span className="text-gray-500">{items.comments}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{items.description}</p>
            </div>
            <div className="flex justify-between items-center px-4 py-6">
              <div className="flex items-center">
                <img
                  src={items.authorImage}
                  alt={items.author}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-gray-700">{items.author}</span>
              </div>
              <a href="#" className="text-green-600 hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
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
  );
};

export default Content_Blog;
