import React , {useState,useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import MenuToggle from '../Components/MenuToggle';
import {motion} from 'framer-motion';
import { NavItems } from '../Constants/Nav_data';
import { IoMdArrowDropdown , IoMdArrowDropleft } from "react-icons/io"

const Navbar = () => {
  const [IsMenuDropdownOpen,setIsMenuDropdownOpen]=useState(null);
  const [IsNavDropdownOpen,setIsNavDropdownOpen]=useState(null);
  const [isScrolled,setIsScrolled]=useState(false)
  const [isScrolling,setIsScrolling]=useState(false);
  const menuRef=useRef(null);
  const navRef=useRef(null);
  const [IsMenuOpen,setIsMenuOpen]=useState(null);
  const location=useLocation()
  
  
  const toggleNavDropdown=(index)=>{
    setIsNavDropdownOpen(IsNavDropdownOpen==index?null:index)   
  }
  const toggleMenuDropdown=(index)=>{
    setIsMenuDropdownOpen(IsMenuDropdownOpen==index?null:index)   
  }
  useEffect(()=>{
    const handleScroll=()=>{
      let scrollTimeout
      const scrollPosition=window.scrollY
      if (!isScrolling) {
        setIsScrolling(true);
        setIsMenuDropdownOpen(null);
        setIsNavDropdownOpen(null); // Only set to null once scrolling starts
      }
      setIsScrolled(scrollPosition>80?true:false) 
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false); // Set to false when scrolling stops
      }, 100); 
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>(
      window.removeEventListener('scroll',handleScroll)
  )
  },[isScrolled])
  useEffect(()=>{
    const handleClick=(event)=>{
      if(menuRef.current && !menuRef.current.contains(event.target)){
        setIsMenuDropdownOpen(null)       
      }
      if(navRef.current && !navRef.current.contains(event.target)){
        setIsNavDropdownOpen(null);
        // console.log(`clicked outside`);       
      }
    }
    document.addEventListener('mousedown',handleClick)
    return ()=>{
      document.removeEventListener('mousedown',handleClick)
    }
  },[menuRef,navRef])
//  console.log(IsNavDropdownOpen);
  const menuVariants={
    closed:{scaleX:0,visibility:"hidden" , transition:{delay:0.7}},
    open:{scaleX: IsMenuOpen?1:0,
      visibility: IsMenuOpen?"visible":"hidden",
    transition:{duration:0.3}}
  }
  const navContainerVariants={
    closed:{height:0,transition:{delay:0.3}},
    open:{
      height:IsMenuOpen?"auto":0,
      transition:{
        type:"spring",
        stiffness:55,
        delay:0.4,
        duration:0.5,
        delayChildren:0.8,
        staggerChildren:0.1
      }
    }
  }
  const navVariants={
    closed:{opacity:0,y:30},
    open:{opacity:1,y:0,
    transition:{type:"spring",stiffness:80,duration:0.5}}
  }
  const navHContainerVariants={
    closed:{opacity:0},
    open:{opacity:1,
      transition:{duration:0.5, delayChildren:0.8, staggerChildren:0.1}}
    }
  const navVariantss={
    closed:{opacity:0,x:30},
    open:{opacity:1,x:0,
    transition:{duration:1,type:"spring",stiffness:80}}
  }

  const navDropdownVariants={
    closed:{opacity:0,y:20},
    open:{opacity:1,y:0,
    transition:{type:"spring",stiffness:80}}
  }

  return (
    <motion.div key={isScrolled?"scrolled":"unscrolled"} className={`${isScrolled?"scrolled-nav":"unscrolled-nav"} fixed px-6 z-30 w-full flex justify-between ${isScrolled?"bg-[#0B2C3D]":"bg-[#071e2973]"}`}  initial={{top:isScrolled?-80:80}} animate={
      {top:isScrolled?0:80,
      transition:{duration:0.8, ease: "easeInOut"}
      }}>
        <div className="text-4xl content-center font-bold">
          <span className='text-white'>Find</span><span className='text-green-500'>Estate</span> 
        </div>
        <motion.div className="hidden lg:flex py-6 gap-8 justify-center items-center  relative cursor-pointer" ref={navRef} variants={navHContainerVariants} initial="closed" animate="open">
          {
            NavItems.map((items,index)=>(
              items.subLinks?(
                <motion.li className={`nav-drpdwn relative list-none text-base text-white hover:text-green-500 items-center flex gap-2
                ${items.subLinks.some((link) => `/${link.link}` === location.pathname) ? "nav-drpdwn active":""}
                `} variants={!isScrolled?navVariantss:''} onClick={()=>toggleNavDropdown(index)} key={index}>
                    <h1 className='font-bold relative'>{items.name}</h1>
                    <IoMdArrowDropdown className={`text-xl ${IsNavDropdownOpen==index?"rotate-180":"rotate-0"} transition-all duration-500 ease-in-out`}/>
                    {
                    <motion.div className={`absolute top-14 w-56 flex flex-col gap-3 py-3 bg-[#0B2C3D] rounded-[10px]`} 
                        variants={{
                          closed:{clipPath:"inset(10% 50% 90% 50% round 10px)",visibility:'hidden',opacity:0,transition:{type:"spring",delay:0.3, staggerChildren:0.1, staggerDirection:-1}},
                          open:{clipPath: "inset(0% 0% 0% 0% round 10px)",visibility:'visible', opacity:IsNavDropdownOpen==index?1:0,transition:{duration:0.3,delayChildren:0.3,staggerChildren:0.1}}
                        }} initial='closed' animate={IsNavDropdownOpen==index?"open":"closed"}>
                          {
                            items.subLinks.map((item,i)=>(
                              <NavLink to={item.link} key={i}>
                                <motion.div className='flex justify-center items-center text-white hover:text-green-500 py-3 text-center' variants={navDropdownVariants}>
                                  <p className='nav-link relative'>{item.name}</p></motion.div>
                              </NavLink>
                            ))
                          }
                    </motion.div>
                    }
                  </motion.li>
                ):(
                <NavLink to={items.link} key={index}>
                  { 
                    ({isActive})=>(
                      <motion.li className={`nav-link relative list-none text-base font-bold ${isActive? "text-green-500":"text-white"} hover:text-green-500`} variants={!isScrolled?navVariantss:''} onClick={()=>toggleNavDropdown(index)} >{items.name}</motion.li>
                    )
                  }
                </NavLink>
              ))
              )              
          }
        </motion.div>
        <motion.div className="flex items-center py-6 justify-center lg:hidden" initial="closed" animate={IsMenuOpen?"open":"closed"}>
          <MenuToggle className='' setIsMenuOpen={setIsMenuOpen} />
        </motion.div>
        
        <motion.div className= {`absolute right-2 top-20 bg-green-600 pt-[2px]
        list-none`} ref={menuRef} 
        variants={menuVariants} initial="closed" animate={IsMenuOpen?"open":"closed"}
        >
          <motion.div className="bg-[#0B2C3D]" variants={navContainerVariants}>
          {
            NavItems.map((item,index)=>(
              
                item.subLinks ? (
                  <motion.div className='nav-link-container w-60 py-4 flex justify-center items-center font-bold relative lg:hidden  text-white hover:text-green-500 hover:bg-[#19648a94] cursor-pointer' onClick={()=>toggleMenuDropdown(index)}  key={index} variants={navVariants}>
                
                  <div className={`nav-drpdwn relative flex text-center gap-1 ${item.subLinks.some((link) => `/${link.link}` === location.pathname) ? "nav-drpdwn active":""}`} >
                    <h1 className="relative">{item.name}</h1>
                    <span className='text-xl flex items-center'>
                      {(IsMenuDropdownOpen==index? <IoMdArrowDropleft/>:<IoMdArrowDropdown/>)}
                    </span>
                  </div>                  
                  
                  {item.subLinks && ( 
                        IsMenuDropdownOpen==index && (
                          <motion.div className="absolute -left-52 top-6 z-10 max-h-64 bg-[#0B2C3D] overflow-y-auto" variants={{
                            closed:{
                              clipPath:"inset(10% 50% 90% 50% round 10px)",
                              visibility:'hidden',
                              opacity:0,
                              transition:{type:"spring",delay:0.3, staggerChildren:0.1, staggerDirection:-1}
                            },
                            open:{
                              clipPath: "inset(0% 0% 0% 0% round 10px)",
                              visibility:'visible',
                              opacity:IsMenuDropdownOpen?1:0,
                              transition:{duration:0.3,delayChildren:0.3,staggerChildren:0.1}
                            }
                          }} initial="closed" animate={IsMenuDropdownOpen==index?"open":"closed"}
                          >
                            {
                              item.subLinks.map((subItems,subIndex)=>(
                                <NavLink to={subItems.link} key={subIndex}>
                                  <motion.div key={subIndex} className='w-48 py-6 flex justify-center items-center text-white hover:text-green-500'
                                  variants={navDropdownVariants}>
                                    <p className='nav-link relative'>{subItems.name}</p>
                                  </motion.div>
                                </NavLink>
                              ))
                            }
                          </motion.div>
                  ))}                
                
                  </motion.div>
                ):(
                <NavLink to={item.link} key={index}>
                  <motion.div variants={navVariants} className='nav-link-container lg:hidden w-60 py-4 flex justify-center items-center font-bold relative text-white hover:text-green-500 hover:bg-[#19648a94] cursor-pointer' onClick={()=>toggleMenuDropdown(index)}  >                  
                    <h1 className='nav-link relative '>{item.name}</h1>
                  </motion.div>
                </NavLink>
                )
              
              
            ))
          }
          </motion.div>          
        </motion.div>
    </motion.div>
  )
}

export default Navbar