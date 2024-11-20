import React,{useEffect,useState} from 'react'

import { motion } from 'framer-motion'
const ScrollTopbtn = () => {
    const [isVisible,seIsVisible]= useState(true)

  return (
    <motion.div className='fixed bottom-0 right-10 bg-[#27AE60] text-white py-2 px-4 content-center'
    initial={{y:'50%',opacity:0}} animate={{y:isVisible?'0%':'100%',opacity:isVisible?1:0}} transition={{duration:10 , ease:'easeInOut', repeat:Infinity}}>
        <p>Scroll</p>
    </motion.div>
  )
}

export default ScrollTopbtn