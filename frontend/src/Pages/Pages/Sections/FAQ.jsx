import React, {useState} from 'react'
import Accordion from '../../../Components/Accordion'
import { faq_data } from '../../../Constants/FAQ_data'

const FAQ = () => {
    const [isOpen,setIsOpen] =useState(false);
    const toggleShow=(id)=>{
        setIsOpen(isOpen==id?false:id)       
    }
  return (
    <div className='py-24 flex items-center justify-center px-6 sm:px-8'>
        <div className='mx-auto py-4 px-6 sm:w-[576px] md:w-[768px] lg:w-[992px] xl:w-[1200px] flex flex-col gap-6 shadow-[0px_0px_5px_1px] shadow-[rgb(194,197,202)] rounded-xl'>
            {
                faq_data.map((items)=>{  
                    const {id}= items;
                    return <Accordion key={id} toggle={()=>toggleShow(id)} state={isOpen} {...items}/>
            })
            }
        </div>
    </div>
  )
}

export default FAQ