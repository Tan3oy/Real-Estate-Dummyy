import React from 'react'
import Hero_Section_About from './Sections/Hero_Section_About'
import About_details from './Sections/About_details'
import Team from './Sections/Team'
import { Service_counter } from './Sections/Service_counter'
const About = () => {
  return (
    
    <div className=''>
      <Hero_Section_About/>
      <About_details />
      <Service_counter/>
      <Team />
    </div>
  )
}

export default About