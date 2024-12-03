import React from 'react'
import Hero_Property from './Sections/Hero_Property'
import Property_cards from './Sections/Property_cards'
import Property_details from './Sections/Property_details'
import { allPropertyCards, featuredPropertyCards, topPropertyCards, urgentPropertyCards } from '../../../Components/Property_Filters';
import { Route, Routes } from 'react-router-dom';
import Agents from '../Agents/Agents';

const Property_Routes = () => {
  // const [topCards,topRanges]=topPropertyCards();
  // console.log("topCards::",topCards);
  // console.log("Ranges::",topRanges);
  // const filteredData= FilteredFiltred()
  // console.log("featured datas :: ",filteredData);
  
  
  
  return (
    <div>
      <Routes>
        <Route path="*" element={<Hero_Property/>}>
          {/* Top Properties Routes */}
          <Route path="top_properties" element={<Property_cards fetchedData={topPropertyCards()}/>}/>
          <Route path="top_properties/:_id" element={<Property_details/>}/>
          {/* Featured Properties Routes */}
          <Route path="featured_properties" element={<Property_cards fetchedData={featuredPropertyCards()}/>}/>
          <Route path="featured_properties/:_id" element={<Property_details/>}/>
          {/* All Properties Routes */}
          <Route path="all_properties" element={<Property_cards fetchedData={allPropertyCards()}/>}/>
          <Route path="all_properties/:_id" element={<Property_details/>}/>
          {/* Urgent Properties Routes */}
          <Route path="urgent_properties" element={<Property_cards fetchedData={urgentPropertyCards()}/>}/>
          <Route path="urgent_properties/:_id" element={<Property_details/>}/>
        </Route>
        <Route path="agents" element={<Agents/>}/>

      </Routes>
    </div>
  )
}

export default Property_Routes