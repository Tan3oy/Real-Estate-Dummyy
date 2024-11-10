import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
 export const Enabled_icon= () => {
return (
    <div className=''>
        <div className="w-6 h-6 bg-[#d9f0e8] rounded-[50%] flex justify-center items-center">
            <div className="w-4 h-4 border-solid border-[#29a847] opacity-80 border-2 rounded-[50%] flex justify-center items-center pb-[2px]">
                <div className=" inline-block w-2 h-[5px] border-solid border-[#29a847] opacity-80 border-l-2 border-b-2 border-t-0 border-r-0 rotate-[-45deg]"></div>
            </div>
        </div>
    </div>
)
}

export const Disabled_icon= () => {
return (
    
    <div className="w-6 h-6 bg-[#d9f0e8e4] rounded-[50%] flex justify-center items-center">
        <div className="w-4 h-4 border-solid border-[#848385] border-2 rounded-[50%] flex justify-center items-center relative
        before:absolute before:content-[''] before:h-2 before:w-[2px] before:bg-[#848385] before:rotate-45
        after:absolute after:content-[''] after:h-2 after:w-[2px] after:bg-[#848385] after:-rotate-45
        "></div>                
    </div>
)
}

