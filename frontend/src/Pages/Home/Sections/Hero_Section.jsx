import { propertyTypeOptions,locationOptions } from "../../../Constants/Menu_data"
import { useState } from "react"
import Dropdown from "../../../Components/Dropdown"

const Hero_Section = () => {  
        const [toggleTab, setToggleTab] = useState(0)       
        
return (
    <section id="hero" className="relative bg-home-hero-image bg-no-repeat bg-cover bg-center [border-image:linear-gradient(#0b2c3d70,#0b2c3d70)_fill_1]">
        <div className="hero-container pt-40 pb-44 w-full ">
            <div className="hero-heading flex justify-center items-center">
                <p className='hero-heading-text ' >find your next pefect place to live</p>
            </div>
            
            <div className="hero-contents">
                <div className="hero-tabs flex flex-row rounded-sm justify-center mb-9">
                    <div className="hero-tabs-button-wrapper rounded-md overflow-hidden">
                        {
                            ['Any','Sell','Rent'].map((tab,index) => (
                                <button className= {toggleTab === index ? 'hero-tabs-button active' : 'hero-tabs-button'} key={index} onClick={() =>setToggleTab(index)}>{tab}</button>
                            ))
                        }
                    </div>    
                </div>
                <div className="hero-menu-group flex justify-center items-center">
                    <div className=' bg-white rounded-md flex flex-wrap mx-4 p-[6px] gap-2 sm:gap-y-4 sm:gap-x-5 md:gap-x-6 sm:w-[30rem] md:w-[48rem] lg:w-[58rem] xl:w-[70rem] sm:grid sm:grid-cols-2 lg:grid-cols-4'>
                            <input type="text" placeholder='Type...' className="text-lg py-3 px-4 outline-none w-full sm:w-auto border border-slate-400"/>
                            <Dropdown options={locationOptions} placeholder='Select Location'/>
                            <Dropdown options={propertyTypeOptions} placeholder='Property Type'/>
                            <button className=" menu-button relative text-lg bg-[#0B2C3D] z-10 text-slate-100 font-semibold py-3 px-4 w-full sm:w-auto border border-slate-400 overflow-hidden">Search Property</button>
                    </div>  
                </div>
            </div>
        </div>
    </section>

)
}

export default Hero_Section