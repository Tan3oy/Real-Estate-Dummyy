import {React, useRef,useEffect,useState} from 'react'
// import {CounterData} from '../../../Constants/Counter_data'
import Counter from '../../../Components/Counter';
import axios from 'axios'

const Service_Counter = () => {
  const counterContainer=useRef(null);
  const counterChild=useRef(null);
  const[counterData,setCounterData]=useState([])
  const updateHeight=()=>{
      counterChild.current && (
      counterContainer.current.style.height=`${counterChild.current.offsetHeight}px`
    )
    }
  useEffect(()=>{
    updateHeight();
    addEventListener('resize',updateHeight);
    return()=>{
      removeEventListener('resize',updateHeight);
    }
  },[])
  useEffect(()=>{
    axios.get("api/allcounters")
    .then((res)=>setCounterData(res.data))
    .catch((err)=>console.log(err)
    )
  },[])
  console.log(import.meta.env.VITE_API_URL); // Vite 
  
  return (
    <section ref={counterContainer} className='service-counter relative '>
      <div ref={counterChild} className="counter-container absolute -top-14 left-0 w-full">
        <div className="counter-wrapper rounded-md  px-3 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x-2 sm:gap-x-2 lg:gap-0 shadow-lg mx-8 sm:mx-auto sm:h-[276px] lg:h-[8rem] xl:h-[7rem] sm:w-[524px] md:h-[304px] md:w-[720px] lg:w-[947px] xl:w-[1142px] 2xl:w-[1352px]">
          {
            counterData.map((item) => (
              console.log(item.value),
              <div className='counter-card flex justify-between px-5 py-9 lg:py-5 items-center' key={item._id}>
                <div className="counter-logo h-[80px] sm:h-[66px] md:h-[80px] lg:h-[66px] w-[80px] sm:w-[66px] md:w-[80px] lg:w-[66px]">
                  <img src={item.logo} alt=""  className='object-contain'/>             
                </div>
                <div className="counter-body text-center grow">
                  <Counter value={item.value}/>
                  <p>{item.title}</p>
                </div>
              </div>
            ))
          }
        </div> 
      </div>
    </section>
  )
}

export default Service_Counter
