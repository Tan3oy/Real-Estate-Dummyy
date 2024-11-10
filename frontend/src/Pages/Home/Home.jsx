import React from 'react'
import Hero_Section from './Sections/Hero_Section'
import Service_Counter from './Sections/Service_Counter'
import Agents from './Sections/Agents'
import Clients from './Sections/Clients'

 const Home = () => {
  return (
    <div>
        <Hero_Section/>
        <Service_Counter/>
        <Agents/>
        <Clients/>
    </div>
  )
}
export default Home
