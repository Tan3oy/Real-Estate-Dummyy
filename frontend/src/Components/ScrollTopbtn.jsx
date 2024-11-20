import React,{useEffect,useState} from 'react'

import { motion } from 'framer-motion'
const ScrollTopbtn = () => {
    const [hasRendered, setHasRendered] = useState(false);
    const [isVisible,setIsVisible]= useState(false)
    useEffect(()=>{
    const handleScroll=()=>{
      console.log(window.scrollY);
      
        setIsVisible(window.scrollY>240? true:false)
        setHasRendered(isVisible?true:false)
    }

      document.addEventListener('scroll',handleScroll)
      return ()=>{
        document.removeEventListener('scroll',handleScroll)
      }
    })
  return (
    isVisible &&(
    <motion.div className='fixed z-10 bottom-0 right-10 bg-[#27AE60] text-white py-2 px-4 content-center rounded-full cursor-pointer'
    initial={{y:0,opacity:0}} animate={{y: hasRendered? ['0%', '20%', '0%']: "20%", opacity: 1}} transition={{duration:1 , ease:'easeInOut',repeatType:'loop', repeat: hasRendered?Infinity:0}} onClick={()=>window.scrollTo({top: 0 , left: 0, behavior: 'smooth'})}>
        <p>Scroll</p>S
    </motion.div>)
  )
}

export default ScrollTopbtn