import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {
    const routePath=useLocation().pathname
    const paths=routePath.split("/").filter((el)=>el)
    const paths2=paths.filter((el)=>(
        paths.indexOf(el)!==paths.length-1
    ))
    console.log("Path Arr",paths);
    console.log("Path Arr2",paths2);
    console.log(routePath);
    let BreadCrumbPath=""
    // console.log("BreadCrumbPath",BreadCrumbPath);
    
    
  return (
    <div className='flex'>
        <p><Link to="/">Home - </Link></p>
      {
            paths2.map((el,i)=>{
              BreadCrumbPath+=`/${el}`
              console.log("BreadCrumbPath",BreadCrumbPath);
              
                return <span key={i}>
                  <Link to={BreadCrumbPath}>                   
                    <span className='pl-1 capitalize'>{el}</span>
                  </Link>
                  <span className='pl-1'>-</span>
                </span>               
              })
        }</div>
  )
}

export default BreadCrumbs