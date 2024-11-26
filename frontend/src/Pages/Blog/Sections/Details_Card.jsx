import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BsChatSquareText } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";

import { BsClock } from "react-icons/bs";
<BsClock />;

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
      <div className=" gap-y-6 lg:flex-row mx-auto my-28 px-4 md:px-24 lg:px-8 xl:px-24 lg:gap-x-6 w-[450px] sm:w-[576px] md:w-[768px] lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
        <div className="  rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
          
          {/* Image Section */}
          <div className="">
            
            <div className="h-full w-full">
              <img src={BlogsData?.image} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between px-4 py-2 ">
              <div className="flex items-center">
                <FaEye className=" mr-2" />
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
              
              {/* Content Section */}
             
            </div>
            <div>
              <h1>{BlogsData?.title}</h1>
              <p>{BlogsData?.description}</p>
            </div>
            
          </div>
        </div>
        <div className=" gap-y-6 rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
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
      </div>
    </div>
  );
};

export default Details_Card;
