import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {
    const routePath=useLocation().pathname
    const paths=routePath.split("/").filter((el)=>el)
    const paths2=paths.filter((el)=>(
        paths.indexOf(el)!==paths.length-1
    ))
    const paths3=paths2.map((el)=>el.replace(/_/, ' '))
    console.log("Path Arr",paths);
    console.log("Path Arr2",paths2);
    console.log("Path Arr3",paths3);
    console.log(routePath);
    let BreadCrumbPath=""
    // console.log("BreadCrumbPath",BreadCrumbPath);
    
    
  return (
    <div className='flex'>
        <p><Link to="/" className='text-[8px] md:text-sm lg:text-lg'>Home</Link></p>
      {
            paths3.map((el,i)=>{
              BreadCrumbPath+=`/${el}`
              console.log("BreadCrumbPath",BreadCrumbPath);
              
                return <span key={i}>
                  <Link to={BreadCrumbPath}>               
                    <span className='capitalize text-[8px] md:text-sm lg:text-lg'>&nbsp;-&nbsp;{el}</span>
                  </Link>
                  {/* <span className=''>&nbsp;-&nbsp;</span> */}
                </span>               
              })
      }
    </div>
  )
}

export default BreadCrumbs