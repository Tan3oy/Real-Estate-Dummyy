import React from 'react'
import Hero_Section from './Sections/Hero_Section'
import Service_Counter from './Sections/Service_Counter'
import Ourproperties from './Sections/Ourproperties'

import Featured_Properties from './Sections/Featured_Properties/Featured_Properties'
import Agents from './Sections/Agents'
import Services from './Sections/Services'
import Clients from './Sections/Clients'
import Blogs from './Sections/Blogs'
import Top from './Sections/Top'

 const Home = () => {
  return (
    <div>
        <Hero_Section/>
        <Service_Counter/>
        <Ourproperties/>
        <Top />
        <Featured_Properties />
        <Services />
        <Agents/>
        <Clients/>
        <Blogs />
       
    </div>
  )
}
export default Home
