import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { FaFacebook ,FaTwitter,FaWhatsapp,FaLinkedin } from "react-icons/fa";
import ParallaxContainer from '../../../Components/Parallax'
// import { AgentData } from '../../../Constants/Agent_data'
import { FaRegEye } from "react-icons/fa6"
import { CiLocationOn } from "react-icons/ci"


const Agents = () => {
  const [isOpen,setIsOpen] =useState(null);
  const [Agent_data, setAgent_data] = useState([]);
  useEffect(()=>{
      axios
      .get("http://localhost:5000/api/allagents")
      .then((res)=>(
          setAgent_data(res.data),
          console.log(res.data))
      )
      .catch((err)=>console.log(err))
  },[])

  const icons=[<FaFacebook/>,<FaTwitter/>,<FaWhatsapp/>,<FaLinkedin/>] 
  return (
    <section>
      
        <div className="">
          <ParallaxContainer bgImage="https://demo.websolutionus.com/findestate/uploads/website-images/banner-2021-10-30-09-13-33-7585.jpg" strength={150}>
            <div className="agent-card-container sm:w-[36rem] md:w-[48rem] lg:w-[62rem] xl:w-[75rem] flex flex-wrap gap-y-6 mx-auto pt-28 pb-28">
              <div className="text-center text-white px-16 mb-10">
                <h1 className='text-4xl font-bold  mb-6'>Our Agents</h1>
                <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde et voluptate, mollitia, illum eligendi dignissimos tenetur incidunt in asperiores, quaerat aliquam deserunt quo!</p>
              </div>
            {
              Agent_data.slice(0,4).map((item) =>(
                <div key={item._id} className="agent-card rounded-lg bg-white shadow-lg sm:w-[46%] lg:w-[21%] xl:w-[23%] shadow-slate-500 mx-auto">
                  <div className="dp w-full h-auto px-4 pt-4"> 
                    <img src={item.image} className="object-cover rounded-t-md h-full w-full" />                                      
                  </div>
                  <div className="agent-links flex justify-between bg-[#0B2C3D] px-6 py-4 mb-2 w-full">
                    {
                      icons.map((items,i)=>(
                        <div className="icon-wrapper p-2 rounded-full bg-white text-green-700 " key={i}>{items}</div>
                      ))
                    }
                  </div>
                  <div className="agent-card-body flex flex-col gap-4 items-center justify-center px-5 xl:px-6">
                    <div className="agent-details  flex flex-col gap-1 items-center justify-center ">
                      <div className=' text-xl md:text-2xl lg:text-lg xl:text-2xl h-8 font-bold text-center'>{item.name}</div>
                      <span className="agent-address h-10 lg:h-12 xl:h-14 text-sm xl:text-base flex gap-1">
                        <span><CiLocationOn className='mt-1'/></span>
                        <span className=''>{item.address}</span>
                      </span>
                    </div>
                    <button className="abcd outline-none mb-5 lg:mb-4 text-base md:text-lg lg:text-base flex flex-row justify-center items-center gap-2 px-4 py-2 bg-green-500 rounded-md text-white font-semibold">
                      <FaRegEye />
                      <div className="button-txt">View Profile</div>
                    </button>
                  </div>
                </div>
              ))
            }
            </div>
          </ParallaxContainer>
          
        </div>
      
    </section>
  )
}

export default Agents