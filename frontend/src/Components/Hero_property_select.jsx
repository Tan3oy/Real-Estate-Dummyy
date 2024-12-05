import React,{useState} from 'react'
import Dropdown from './Select_dropdown'
import { propertyTypeOptions,locationOptions } from '../Constants/Menu_data'

const Hero_property_select = () => {
    const [toggleTab, setToggleTab] = useState("Any")       

    console.log("toggleTab",toggleTab);
    
  return (
    <div className='pt-40 bg-slate-400'>
         <div className="hero-contents">
                <div className="hero-tabs flex flex-row rounded-sm justify-center mb-9">
                    <div className="hero-tabs-button-wrapper rounded-md overflow-hidden">
                        {
                            ['Any','Sell','Rent'].map((tab,index) => (
                                <button className= {toggleTab === tab ? 'hero-tabs-button active' : 'hero-tabs-button'} key={index} onClick={() =>setToggleTab(tab)}>{tab}</button>
                            ))
                        }
                    </div>    
                </div>
        </div>
        <form className="hero-menu-group flex justify-center items-center">
                    <div className=' bg-white rounded-md flex flex-wrap mx-4 p-[6px] gap-2 sm:gap-y-4 sm:gap-x-5 md:gap-x-6 sm:w-[30rem] md:w-[48rem] lg:w-[58rem] xl:w-[70rem] sm:grid sm:grid-cols-2 lg:grid-cols-4'>
                            <input type="text" placeholder='Type...' className="text-lg py-3 px-4 outline-none w-full sm:w-auto border border-slate-400"/>
                            <div className="border border-slate-400"><Dropdown options={locationOptions} placeholder='Select Location'/></div>
                            <div className="border border-slate-400"><Dropdown options={propertyTypeOptions} placeholder='Property Type'/></div>
                            <button className=" menu-button relative text-lg bg-[#0B2C3D] z-10 text-slate-100 font-semibold py-3 px-4 w-full sm:w-auto border border-slate-400 overflow-hidden">Search Property</button>
                    </div>  
        </form>
    </div>
  )
}

export default Hero_property_select