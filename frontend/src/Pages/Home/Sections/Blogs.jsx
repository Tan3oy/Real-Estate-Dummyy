import React,{useEffect ,useState} from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

import { BsChatSquareText } from "react-icons/bs";
 
  

const Blogs = () => {const [isOpen,setIsOpen] =useState(null);
    const [Blogs_data, setBlogs_data] = useState([]);
    useEffect(()=>{
        axios
        .get("api/AllBlogs")
        .then((res)=>(
            setBlogs_data(res.data))
        )
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>
         <div className="w-5/6 m-auto text-center py-10">
          <h4 className="text-4xl font-bold">Our Blog</h4>
          <h1 className=" text-xl text-gray-400 mt-[25px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the when an unknown printer took.
          </h1>
        </div>
        <div className="mx-auto p-8 sm:w-[576px] md:w-[768px] lg:w-[992px] xl:w-[1200px] md:flex md:flex-wrap md:gap-y-8 justify-between">
      {Blogs_data.slice(0,3).map((items, index) => (
        <div className="h-fit md:w-[48%] lg:w-[32%] bg-white shadow-[0_1px_10px_1px] shadow-[#97999db8] rounded-lg overflow-hidden" key={index}>
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
              <Link to={`/blog/${items._id}`} className="text-green-600 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
       </div>
    </div>
  )
}

export default Blogs