import React from 'react'
import Dropdown from "../../../../Components/Select_dropdown"
import { IoSearch } from "react-icons/io5";
import { propertyTypeOptions,locationOptions,propertyPurpose } from "../../../../Constants/Menu_data"



const Property_select = () => {
  return (
    <div className='hidden md:block xl:w-[28%]'>
        <div className="bg-[#0B2C3D] text-white font-bold p-4 flex items-center justify-between">
            <p className='text-lg'>Find Your Property</p>
            <span><IoSearch className='text-xl'/></span>
        </div>
        <form className='flex flex-col gap-3 p-4  border shadow-[0px_0px_8px_0px_#97999db8] '>
            <div className="flex flex-col gap-2">
                <p className='font-bold text-lg'>Keyword</p>
                <input type="text" placeholder='Type...' className='p-2 outline-none border border-[#919191]'/>
            </div>
            <div className="flex flex-col gap-2">
                <p className='font-bold text-lg'>Location</p>
                <Dropdown options={locationOptions} placeholder='Location'/>               
            </div>
            <div className="flex flex-col gap-2">
                <p className='font-bold text-lg'>Property Type</p>
                <Dropdown options={propertyTypeOptions} placeholder='Property Type'/>               
            </div>
            <div className="flex flex-col gap-2">
                <p className='font-bold text-lg'>Property Purpose</p>
                <Dropdown options={propertyPurpose} placeholder='Any'/>                
            </div>           

        </form>
    </div>
  )
}

export default Property_select