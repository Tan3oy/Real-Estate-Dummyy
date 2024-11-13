import React from 'react'
import Hero_Section from './Sections/Hero_Section'
import Service_Counter from './Sections/Service_Counter'
import Featured_Properties from './Sections/Featured_Properties/Featured_Properties'
import Agents from './Sections/Agents'
import Clients from './Sections/Clients'
import Our_Blogs from './Sections/Our_Blogs'
import Ourproperties from './Sections/Ourproperties'

 const Home = () => {
  return (
    <div>
        <Hero_Section/>
        <Service_Counter/>
        <Featured_Properties />
        <Agents/>
        <Clients/>
        <Our_Blogs/>
        <Ourproperties/>
    </div>
  )
}
export default Home
