import React, {useState,useEffect} from 'react'
import axios from 'axios'
// import {Pricing_Cards_data} from '../../../Constants/Pricing_Cards_data'
import { FaDollarSign } from "react-icons/fa";
import {Enabled_icon,Disabled_icon} from '../../../Components/Custom_icons'

const Pricing_Plans = () => {
  const [isOpen,setIsOpen] =useState(null);
  const [Pricing_Cards_data, setPricing_Cards_data] = useState([]);
  useEffect(()=>{
      axios
      .get("http://localhost:5000/api/allpricingcards")
      .then((res)=>(
          setPricing_Cards_data(res.data),
          console.log(res.data))
      )
      .catch((err)=>console.log(err))
  },[])
  
  

  return (
    <div className='py-24'>
    <div className="price-card-container sm:w-[576px] md:w-[768px] lg:w-[992px] xl:w-[1200px] flex flex-col sm:flex-row sm:justify-evenly sm:flex-wrap sm:mx-auto gap-x-6 gap-y-8  px-6">
      {
        Pricing_Cards_data.map((items,i)=>(
      <div className="price-card px-4 sm:px-1 py-6 rounded-xl h-auto w-full sm:w-[47%] xl:w-[30%] flex flex-col gap-9 mx-auto sm:mx-0  shadow-[0px_1px_12px] shadow-[rgb(194,197,202)] transition-transform duration-300 hover:scale-[1.05] group" key={i}>
        <div className="card-type uppercase px-4 py-[5px] border border-green-500 rounded-[30px] bg-[#27AE60] text-white text-xl font-semibold mx-auto tranistion-all duration-500 ease-out group-hover:bg-[#0b2c3d]">{items.name}</div>
        <div className="values mx-auto flex flex-col gap-2">
          <div className="flex text-[#093B55]">
            <span className='pt-1 content-center text-3xl '><FaDollarSign/></span><span className=' font-bold text-4xl'>{items.price}</span>
          </div>
          <div className="text-[#848385] text-lg text-center capitalize">{items.days} days</div>
        </div>
        <div className="facility-wrapper sm:flex sm:flex-col sm:gap-4 pl-2">
          {
          items.facilities.map((facilities,k)=>(
            <div className={`flex gap-2 text-lg ${facilities.type=="enabled"?"text-black":"text-[#848385]" }`} key={k}>
              <span className=' content-center'>{facilities.type=="enabled"?<Enabled_icon/>:<Disabled_icon/>}</span>
              { facilities.count != null && <span>{facilities.count}</span> }
              <span>{facilities.name}</span>
            </div>
          ))
          }
        </div>
          
        <button className='mx-auto relative bg-[#27AE60] px-4 py-3 rounded-md font-semibold text-sm md:text-base text-white before:content-[""] before:absolute z-[1] before:bg-[#0b2c3d] before:top-0 before:left-0 before:w-0 before:h-full before:z-[-1] before:opacity-0 before:transition-all before:duration-500 before:ease-in-out hover:before:w-full hover:before:opacity-100 overflow-hidden'>Start With {items.button_name}</button>
      </div>           
        ))
      }
    </div>
  </div>
  )
}

export default Pricing_Plans