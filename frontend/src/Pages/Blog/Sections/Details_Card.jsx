import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BsChatSquareText } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";


import { BsClock } from "react-icons/bs";


const Details_Card = () => {
  const { _id } = useParams();
  const [BlogsData, setBlogsData] = useState(null);

  // test
  console.log("Fetching blog with ID:", _id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blog/${_id}`)
      .then((res) => setBlogsData(res.data))
      .catch((err) => console.log(err));
  }, [_id]);

  // test
  console.log(BlogsData);
  return (
    <div>
      <div className=" gap-y-6 flex flex-col lg:flex-row lg:flex-wrap gap-8  mx-auto my-28 px-4 md:px-24 lg:px-8 xl:px-24 lg:gap-x-6 w-[450px] sm:w-[576px] md:w-[768px] lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
        <div className="  rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
          
          {/* Image Section */}
          <div className="">
            
            <div className="h-full w-full">
              <img src={BlogsData?.image} className="w-full h-full object-cover" />
            </div>
            <div className="flex  items-center justify-between px-4 py-2 ">
              <div className="flex items-center">
                <FaUserEdit className=" mr-2" />
                <span className=" font-semibold">
                  {BlogsData?.author}
                </span>
              </div>
              <div className="flex items-center">
                <FaEye className=" mr-2" />
                <p>80views</p>
                <span className=" font-semibold">
                  {BlogsData?.views}
                </span>
              </div>
              <div className="flex items-center">
                <BsChatSquareText className=" mr-2" />
                
                <span className=" font-semibold">
                  {BlogsData?.comments}
                </span>
                <p>comments</p>
              </div>
            </div>
             {/* Content Section */}
            <div>
              <h1>{BlogsData?.title}</h1>
              <p>{BlogsData?.description}</p>
            </div>
            
          </div>
        </div>
        <div className=" flex flex-col gap-y-8 rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
          <h1>comments 0</h1>
          <h1>Submit a Comment</h1>
          <div className="flex flex-col lg:flex-wrap gap-y-6">
            <input
              type="text"
              placeholder="Name"
              className=" border-2 border-gray-400"
            />
            <input
              type="email"
              placeholder="email"
              className=" border-2 border-gray-400"
            />
            <textarea name="Comments" className=" border-2 border-gray-400"></textarea>
            <button className="bg-[#27ae60] text-white p-4">Submit</button>
          </div>
        </div>
       <div className="flex lg:flex-row lg:flex-wrap gap-8">
       <div className="gap-y-6 rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
          <label className="text-xl font-bold text-gray-800">Search</label>
          <div className="relative flex-grow ml-4">
            <input type="text" placeholder="Search" className="w-full p-2 border border-gray-400 rounded-md" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-700 hover:bg-gray-800 text-white rounded-full p-2">
            <BsSearch />
            </button>

          </div>

        </div>
        <div className="gap-y-8 rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
          <div className="divide-y-2 divide-gray-300 px-4">
          <div class="flex justify-between items-center border-b pb-2">
             <span class="text-sm font-medium text-gray-800">Fitnesss</span>
             <span class="text-sm text-gray-600">0</span>
          </div>
          <div class="flex justify-between items-center border-b pb-2">
             <span class="text-sm font-medium text-gray-800">Lifestyle</span>
             <span class="text-sm text-gray-600">5</span>
          </div>
          <div class="flex justify-between items-center border-b pb-2">
             <span class="text-sm font-medium text-gray-800">Event</span>
             <span class="text-sm text-gray-600">3</span>
          </div>
          <div class="flex justify-between items-center border-b pb-2">
             <span class="text-sm font-medium text-gray-800">Bar&Cafe</span>
             <span class="text-sm text-gray-600">2</span>
          </div>
          <div class="flex justify-between items-center border-b pb-2">
             <span class="text-sm font-medium text-gray-800">Food&Drink</span>
             <span class="text-sm text-gray-600">2</span>
          </div>
          </div>

        </div>
        <div className="rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
        <div className="divide-y-2 divide-gray-300">
         <div>
         <h2 className='text-xl font-bold text-gray-800 p-4'>Trending Post</h2>
         </div>
         <div>
          <img src={BlogsData?.image} alt="" className="w-full h-full object-cover" />
         </div>
         <div className="p-3">
          <h3 className="text-xl font-bold text-gray-800">America National Park</h3>
         </div>
         <div className="text-sm text-gray-500 flex items-center">
         <BsClock className="mr-2 w-4 h-4" />
          <span className="">29 July 2021</span>
         </div>
      </div>
        </div>
       </div>

      </div>
    </div>
  );
};

export default Details_Card;
