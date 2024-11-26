import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { propertyTypeOptions,locationOptions,propertyPurpose } from "../../../../Constants/Menu_data"
import Dropdown from "../../../../Components/Select_dropdown"
const Property_select = () => {
const navigate = useNavigate()
const [type,setType]= useState(null)
const [purpose,setPurpose]= useState(null)
const [location,setLocation]= useState(null)
const [checkData, setCheckData] = useState({
    balcony: false,
    alcohol: false,
});

const handleCheckbox =(state)=>{
    setCheckData({...checkData,[state.name]:state?.checked || ""})
    console.log(checkData);
}


const handleChange = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target)
    const keyword= formdata.get("keyword")
    const price= formdata.get("price")
    // console.log("price", price);
    
    const formValues ={
    type: type?.value || "",
    purpose:purpose?.value || "",
    location: location?.value || "",
    keyword,
    price
    }

    console.log(`formValues`, formValues);
    

    const query= new URLSearchParams(checkData).toString()
    console.log(query);

    navigate(`?${query}`)
    
}

return (
    <div className='hidden md:block xl:w-[28%]'>
        <div className="bg-[#0B2C3D] text-white font-bold p-4 flex items-center justify-between">
            <p className='text-lg'>Find Your Property</p>
            <span><IoSearch className='text-xl'/></span>
        </div>
        <form className='flex flex-col gap-3 p-4  border shadow-[0px_0px_8px_0px_#97999db8]' onSubmit={handleCheckbox} >
            {/* Keyword Input */}
            <div className="flex flex-col gap-2">
                <p className='font-bold text-lg'>Keyword</p>
                <input
                    type="text"
                    placeholder='Type...'
                    name="keyword"
                    className='p-2 outline-none border border-[#919191]'
                />
                <p className='font-bold text-lg'>Price</p>
                <input
                    type="number"
                    placeholder='Price'
                    name="price"
                    className='p-2 outline-none border border-[#919191]'
                />
            </div>
            {/* Location Dropdown */}
            <div className="flex flex-col gap-2">
                <p className='font-bold text-lg'>Location</p>
                <Dropdown
                    options={locationOptions}
                    placeholder='Location'
                    // value={location}
                    onChange={(value) => {
                    console.log("Selected Location:", value);
                    setLocation(value);
                    // console.log("location state",location.value);
                    
                }
                }
                    // onChange={(value) => handleDropdownChange("location", value)}
                />              
            </div>
            {/* Property Type Dropdown */}
            <div className="flex flex-col gap-2">
                <p className='font-bold text-lg'>Property Type</p>
                <Dropdown
                    options={propertyTypeOptions}
                    placeholder='Property Type'
                    onChange={(value)=>setType(value)}
                    // onChange={(value) => handleDropdownChange("propertyType", value)}
                />
            </div>
            {/* Property Purpose Dropdown */}
            <div className="flex flex-col gap-2">
                <p className='font-bold text-lg'>Property Purpose</p>
                <Dropdown
                    options={propertyPurpose}
                    placeholder='Any'
                    onChange={(value)=>setPurpose(value)}
                    // onChange={(value) => handleDropdownChange("propertyPurpose", value)}
                />
            </div>
            <div className="py-4 flex justify-center bg-slate-300">
            <input type="checkbox" name='balcony' value={checkData.balcony} onChange={(e)=>handleCheckbox(e.target)} /><label>Balcony</label>
            <input type="checkbox" name='alcohol' value={checkData.alcohol} onChange={(e)=>handleCheckbox(e.target)} /><label>Alcohol</label>
            </div>
            {/* Search Button */}
            <div>
                <button
                    type="submit" 
                    className='
                            mx-auto w-full h-11
                            bg-[#27ae60] text-white font-medium text-[17px]
                            relative
                            z-[1] overflow-hidden

                            before:transition-all before:duration-500 before:ease-in-out
                            before:content-[" "]
                            before:absolute
                            before:top-0 before:left-0
                            before:bg-[#093B55]
                            before:h-full before:w-0
                            before:z-[-1] 
                            before:opacity-0

                            hover:before:w-full
                            hover:before:opacity-100'
                >
                    Search
                </button>            
            </div>
        </form>        
    </div>
);
}

export default Property_select
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const Property_select = () => {

//   return (
//     <form method="GET" className='pt-40 flex flex-col gap-4'>
//     <input
//       // defaultValue={min_price}
//       name="type"
//       placeholder="Property type"
//       type="text"
//       style={{ width: 100 }}
//     />
//     &nbsp;&nbsp;
//     <input
//       // defaultValue={search}
//       name="keyword"
//       placeholder="KeyWord"
//       type="text"
//     />
//     &nbsp;&nbsp;
//     <input name='price' type="number" placeholder='Price'/>
//     &nbsp;&nbsp;
//     <input name='purpose' type="text" placeholder='Property Purpose'/>
//     &nbsp;&nbsp;
//     <input name='address' type="text" placeholder='Property Location'/>
//     <button type="submit">Search</button>
//   </form>
// );
// }

// export default Property_select