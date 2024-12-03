import React from 'react'
import Hero_Property from './Sections/Hero_Property'
import Property_cards from './Sections/Property_cards'
import { topPropertyCards } from '../../../Components/Property_Filters';

const Featured_Properties = () => {
  // const [topCards,topRanges]=topPropertyCards();
  // console.log("topCards::",topCards);
  // console.log("Ranges::",topRanges);
  // const filteredData= FilteredFiltred()
  // console.log("featured datas :: ",filteredData);
  
  
  
  return (
    <div>
      {/* <Hero_Property/> */}
      <Hero_Property/>    
      {/* <Property_cards fetchedData={filteredData} /> */}
    </div>
  )
}

export default Featured_Properties