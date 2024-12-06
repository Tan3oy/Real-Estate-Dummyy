import React,{useEffect, useState} from 'react'
import Dropdown from './Select_dropdown'
import { propertyTypeOptions,locationOptions,propertyPurpose } from '../Constants/Menu_data'

import { useNavigate } from 'react-router-dom'

const Hero_property_select = () => {
    const [toggleTab, setToggleTab] = useState("Any")   
const [selectData, setSelectData] = useState({})
const navigate=useNavigate()

    const formValueGrabber=(value,name)=>{
        console.log(value,name);
        setSelectData({...selectData,[name]:value})
        console.log(selectData); 
    }    

    console.log("toggleTab",toggleTab);
    // console.log("cards",allPropertyCards());
    
    // const handleSearch=(query,data)=>{
    //     const queryResult= queryFilter(query,data)
    //     setFilteredData(queryResult)  
    //     console.log("filteredData :: ",filteredData);

    // }
    const handleSearch=()=>{
        console.log("function activated");
        const query= new URLSearchParams(selectData).toString()
        navigate(`/properties/all_properties?${query}`,{state:selectData})
    }
  return (
    <div className=''>
         <div className="hero-contents">
                <div className="hero-tabs flex flex-row rounded-sm justify-center mb-9">
                    <div className="hero-tabs-button-wrapper rounded-md overflow-hidden">
                        {
                            propertyPurpose.map((tab,index) => (
                                <button className= {toggleTab === tab.label ? 'hero-tabs-button active' : 'hero-tabs-button'} key={index} onClick={() =>{setToggleTab(tab.label);formValueGrabber(tab.value,"purpose")}}>{tab.label}</button>
                            ))
                        }
                    </div>    
                </div>
        </div>
        <form className="hero-menu-group flex justify-center items-center" onSubmit={(e)=>{e.preventDefault();handleSearch()}}>
                    <div className=' bg-white rounded-md flex flex-wrap mx-4 p-[6px] gap-2 sm:gap-y-4 sm:gap-x-5 md:gap-x-6 sm:w-[30rem] md:w-[48rem] lg:w-[58rem] xl:w-[70rem] sm:grid sm:grid-cols-2 lg:grid-cols-4'>
                            <input type="text" name="keyword" placeholder='Type...' onChange={(e)=>formValueGrabber(e.target.value,e.target.name)} className="text-lg py-3 px-4 outline-none w-full sm:w-auto border border-slate-400"/>
                            <div className="border border-slate-400"><Dropdown name="location" options={locationOptions} placeholder='Select Location' onChange={(data,actionMeta)=>formValueGrabber(data.value,actionMeta.name)}/></div>
                            <div className="border border-slate-400"><Dropdown name="type" options={propertyTypeOptions} placeholder='Property Type' onChange={(data,actionMeta)=>formValueGrabber(data.value,actionMeta.name)}/></div>
                            <button className=" menu-button relative text-lg bg-[#0B2C3D] z-10 text-slate-100 font-semibold py-3 px-4 w-full sm:w-auto border border-slate-400 overflow-hidden">Search Property</button>
                    </div>  
        </form>
    </div>
  )
}

export default Hero_property_select