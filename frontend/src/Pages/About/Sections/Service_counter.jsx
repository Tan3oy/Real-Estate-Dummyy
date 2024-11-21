import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Counter from '../../../Components/Counter';
import { FaAudible } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaFortAwesome } from "react-icons/fa";
import { FaAffiliatetheme } from "react-icons/fa";
export const Service_counter = () => {
  const [counterData,setCounterData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/api/allcounters")
    .then((res)=>setCounterData(res.data))
    .catch((err)=>console.log(err)
    )
  },[])

  const counterLogo=[<FaAudible/>,<FaAngleDoubleUp/>,<FaFortAwesome/>,<FaAffiliatetheme/>]
  console.log(counterLogo);
  
  return (
    <div className="bg-[#0B2C3D] w-full">
      <div className='px-8 sm:px-4 py-28 sm:w-[576px] md:w-[768px] lg:w-[992px] xl:w-[1200px] mx-auto'>
          <div className="flex flex-col gap-6 justify-center items-center text-center text-white px-20 pb-20 ">
              <h1 className='font-bold text-3xl'>Our Winning Awards</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ullam? Expedita tempore culpa dignissimos repellendus consequatur repudiandae quae rerum id.</p>
          </div>
          <div className="counter-details grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {
            counterData.map((item,i) => (
              console.log(item.value),
              <div className='counter-card flex flex-col gap-6 justify-center items-center py-8 px- bg-[#27AE60] text-white rounded-xl' key={item._id}>
                <div className="counter-logo text-6xl py-6 px-7 rounded-xl bg-[#0B2C3D]">
                  {counterLogo[i]}                
                </div>
                <div className="counter-body text-center grow">
                  <Counter value={item.value}/>
                  <p className='mt-2'>{item.title}</p>
                </div>
              </div>
            ))

            }

          </div>
      </div>
    </div>
  )
}
