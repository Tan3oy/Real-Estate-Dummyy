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
import ProductFilter from '../../../../Components/ProductFilter'

const Property_cards = () => {

  




  const [propertyCards , setPropertyCards]=useState([])
  useEffect(() => {
    console.log("Updated propertyCards state:", propertyCards);
}, [propertyCards]);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/allproperties")
      .then((res)=>setPropertyCards(res.data))
      .catch((err)=>console.log(err))
  },[])
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4; // Number of cards per page

  // Calculate the number of pages
  const totalPages = Math.ceil(propertyCards.length / cardsPerPage);

  // Get the cards for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = propertyCards.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }




  const [searchParams] = useSearchParams();
  const min_price = searchParams.get('min_price') === null ? '' : searchParams.get('min_price');
  const max_price = searchParams.get('max_price') === null ? '' : searchParams.get('max_price');
  const search_address = searchParams.get('search_address') === null ? '' : searchParams.get('search_address');
  // console.log(`searchParams`, searchParams.get('min_price'));

  useEffect(() => {
      filterPropertyCards();
  }, [min_price, max_price, search_address]);
  

  const filterPropertyCards = async () => {
      try {
          // Fetch all properties from the backend
          console.log("Filtering with params:", { min_price, max_price, search_address });
          const response = await axios.get("http://localhost:5000/api/allproperties");
          const allProperties = response.data;
          console.log("All properties:", allProperties);

          // check minimum one entry occur
          if (search_address.length || min_price.length || max_price.length) {

            const min = parseFloat(min_price);
            const max = parseFloat(max_price);

            // filter products with these conditions
            const filtered = allProperties.filter(product => {

                // const title = product.title ? product.title.toLowerCase() : '';

                // test
                // console.log("product.title:", product.title);
                // console.log("product.price:", product.price);

                // if min_price < product_price then get product
                if (min > 0 && min > product.price) {
                    return false;
                }

                // max_price
                if (max > 0 && max < product.price) {
                    return false;
                }

                // search_address
                if (search_address.length > 0 && ! product.address.toLowerCase().includes(search_address.toLowerCase()) && ! product.speciality.toLowerCase().includes(search_address.toLowerCase()) && ! product.propertyType.toLowerCase().includes(search_address.toLowerCase())) {
                    return false;
                }
                // if (search.length > 0 && !title.includes(search.toLowerCase())) {
                //     return false;
                // }

                return true;
            })


            // set products
            console.log("Filtered products:", filtered);
            setPropertyCards(filtered);

            console.log("Current propertyCards state:", propertyCards);
          
            // setCurrentPage(1);
        }
      } catch (error) {
            console.error("Error fetching filtered properties:", error);      
      }
  }  




  return (
    <div className='px-4 sm:w-[576px]  md:w-[80%] xl:w-[70%] mx-auto md:m-0 '>
      <div className="flex flex-col gap-8 mb-8">
        {
        currentCards.map((items,index)=>(
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

        <br />
        <ProductFilter />
    </div>
  )
}

export default Property_cards