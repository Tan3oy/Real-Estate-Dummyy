import React from 'react';
import { BsChatSquareText } from "react-icons/bs";

const Card = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <div className='w-full h-12'>
            <img
          src={image}
          alt="Placeholder"
          className=" object-cover"
        />
        </div>
        <div className="absolute bottom-4 left-4  text-white px-3 py-1 rounded-md flex items-center">
          <span className='bg-green-600'>{date}</span>
          <span className="font-semibold bg-white">{Year}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-gray-800">
          {title}
        </h2>
         <div className="bg-green-100 text-green-600 p-1 rounded-full">
         <span >
          <BsChatSquareText />
          </span>
          <span className="text-gray-500">{comments}</span>
         </div>
        </div>

        

       <div className='divide-y-2'>
       <p className="text-gray-600 mb-4">
          {description}
        </p>

        <div className="flex justify-between items-center">
        <div className="flex items-center">
            <img
              src={authorImage}
              alt={author}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-700">{author}</span>
          </div>
          <a href="#" className="text-green-600 hover:underline">
            Read More
          </a>
          
        </div>
       </div>
      </div>
    </div>
  );
};

export default Card;
