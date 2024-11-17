import React from 'react'
import {motion} from 'framer-motion'
import { FaAngleDown } from "react-icons/fa6";

const Accordion = ({question,answer, _id, toggle ,state}) => {

  return (
    <div className='rounded-xl overflow-hidden '>
        <h1 className={`font-semibold px-6 py-4  ${state==_id?"bg-[#E7F1FF]":"bg-[#F3F7FD]"} flex items-center justify-between`} onClick={()=>toggle()}>
          <p className='text-lg cursor-pointer'>{question}</p>
          <motion.span className="text-base p-[2px] shadow-[0px_0px_10px] shadow-[#aab3bf] rounded-full" initial={{rotate: 0}} animate={{rotate: state==_id?180:0}} transition={{duration:0.2}}><FaAngleDown/></motion.span>
        </h1>
        <motion.p className='bg-[#F3F7FD]'
        initial={{opacity: 1, height:0}}
        animate ={{opacity:1, height:state==_id?"auto":0}}
        transition={{duration:0.3}}
        >
          <p className='p-5 text-[#848185]'>{answer}</p>
        </motion.p>
    </div>
  )
}
export default Accordion