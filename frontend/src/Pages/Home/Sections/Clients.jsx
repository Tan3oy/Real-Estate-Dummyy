import React ,{useState,useEffect} from 'react'
import ParallaxContainer from "../../../Components/Parallax"
// import {ClientData} from "../../../Constants/Clients_data"
import { LiaQuoteLeftSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';



const Clients = () => {
  const [clientData, setClientData] = useState([])
  useEffect(()=>{  
    axios.get ("http://localhost:5000/api/allclients")
    .then((res)=>setClientData(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <ParallaxContainer bgImage="https://res.cloudinary.com/dx42ztqx9/image/upload/v1729018026/banner-2021-10-30-09-13-22-2956_ezfldx.jpg" strength={150}>
      <div className='pt-28 pb-16 '>
        <div className='text-center text-white sm:w-[36rem] md:w-[48rem] lg:w-[62rem] xl:w-[75rem] px-20 mx-auto mb-16'>
          <h1 className='text-4xl font-bold mb-6'>Happy Clients</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, et voluptatibus a illum praesentium eos totam adipisci nisi, reiciendis neque nam, voluptates qui iste facilis hic placeat amet odit tempora?</p>
        </div>
        <div className="clients-container px-[5vw] sm:px-16 w-full sm:w-[36rem] md:w-[48rem] lg:w-full mx-auto">
            <Swiper
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{

              992:{
                slidesPerView:2
              },
              1200:{
                slidesPerView:2,
                spaceBetween:50
              }
            }}
            
            modules={[Autoplay, Pagination]} // Use necessary modules
            className="mySwiper pb-8" // Optional custom class
          >
            {
              clientData.map((items)=>(
                <SwiperSlide key={items._id}>
                  <div className="client-review-card bg-white mx-auto flex flex-col justify-between gap-6 sm:gap-0 px-8 pt-8 pb-4 rounded-lg h-auto sm:h-[18rem]">
                    <div className="review flex gap-2 bg-white shadow-[1px_1px_10px] shadow-slate-400 p-4 rounded-lg">
                      <span className=" inline-flex text-3xl text-green-600"><LiaQuoteLeftSolid/></span>
                      <span className='text-wrap text-slate-400'>{items.quote}</span>
                    </div>
                    <div className="client-details flex justify-center items-center gap-4">
                      <div className="dp h-20 w-20 overflow-hidden rounded-[50%]">
                        <img src={items.image} className=' object-cover'/>
                      </div>
                      <div>
                        <h1 className='text-xl font-bold'>{items.name}</h1>
                        <p className='text-green-500 text-center'>{items.designation}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        
      </div>
    </ParallaxContainer>
  )
}

export default Clients
