import React, {useState,useEffect} from 'react'
import Accordion from '../../../../Components/Accordion'
// import { faq_data } from '../../../../Constants/FAQ_data'
import axios from 'axios'

const Contents = () => {
    const [isOpen,setIsOpen] =useState(null);
    const [faq_data, setFaq_data] = useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:5000/api/allfaqs")
        .then((res)=>(
            setFaq_data(res.data),
            console.log(res.data))
        )
        .catch((err)=>console.log(err))
    },[])
    const toggleShow=(_id)=>{
        setIsOpen(isOpen==_id?null:_id)       
    }
  return (
    <div className='py-24 flex items-center justify-center px-6 sm:px-8'>
        <div className='mx-auto py-4 px-6 sm:w-[576px] md:w-[768px] lg:w-[992px] xl:w-[1200px] flex flex-col gap-6 shadow-[0px_0px_5px_1px] shadow-[rgb(194,197,202)] rounded-xl'>
            {
                faq_data.map((items)=>{  
                    const {_id}= items;
                    console.log(_id);
                    
                    return <Accordion key={_id} toggle={()=>toggleShow(_id)} state={isOpen} {...items}/>
            })
            }
        </div>
    </div>
  )
}

export default Contents