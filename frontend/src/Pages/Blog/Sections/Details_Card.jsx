import React,{useEffect ,useState} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { BsChatSquareText } from 'react-icons/bs';
import { FaEye } from "react-icons/fa6";<FaEye />
import { BsClock } from "react-icons/bs";<BsClock />

const Details_Card = () => {
    const {_id} = useParams()
    const [BlogsData, setBlogsData] = useState(null);

    // test
    // console.log("Fetching blog with ID:", _id);
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/blog/${_id}`)
        .then((res)=>setBlogsData(res.data))
        .catch((err)=>console.log(err))
    },[_id])

    // test
    // console.log(BlogsData);
  return (
    <div>
        <div className='flex flex-col-reverse gap-y-6 lg:flex-row mx-auto my-28 px-8 md:px-24 lg:px-8 xl:px-24 gap-x-6 sm:w-[576px] md:w-[768px] lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]'>
          <div className='max-w-lg rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)] overflow-hidden'>
            {/* Image Section */}
            <div className='relative'>
                <div className='w-full h-64'>
                    <img src={BlogsData?.image} className='w-full h-full object-cover' />
                </div>
                <div className='absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-black bg-opacity-50'>
                <div className='flex items-center'>
                    <FaEye className='text-white mr-2' />
                    <span className='text-white font-semibold'>{BlogsData?.views}</span>
                </div>
                <div className='flex items-center'>
                    <BsChatSquareText className='text-white mr-2' />
                    <span className='text-white font-semibold'>{BlogsData?.comments.length}</span>
                </div>
                {/* Content Section */}
               <div className='p-4'>
               <div>
                <h2 className='text-black font-semibold'>{BlogsData?.title}</h2>
               </div>
               <div className='mt-2'>
                <p className='text-gray-600'>{BlogsData?.description}</p>
               </div>
               <div className='mt-4 flex items-center'>
               {/* Comments Header */}
                <div className='text-left'>
                  <h2 className='text-lg font-bold text-gray-900'>Comments 0</h2>
                </div>
                {/* sunbmit comment section */}
                <div className='mt-6'>
                  <h3 className='text-lg font-bold text-gray-900'>Submit a comment</h3>
              </div>
              {/* Comment Form */}
              <div>
                <form className='mt-4 space-y-4'>
                  <div className='flex flex-col'>
                   {/* Name */}
                   <div>
                      <input type="text" placeholder="Name" className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    </div>
                    {/* Email */}
                    <div>
                      <input type="email" placeholder="Email" className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    </div>
                    {/* Comment */}
                    <div>
                      <textarea rows="4" placeholder="Comment" className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" defaultValue="" id=""></textarea>
                    </div>
                  
                  {/* Submit Button */}
                  <div className='text-left'>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                      Submit
                    </button>
                  </div>
                  </div>
                </form>
                
              </div>

            </div>

          </div>
        </div>

        );
    
      </div>
    
    </div>
    </div>
    </div>
    
  );
};

export default Details_Card