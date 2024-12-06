import React from 'react'
import Content_Blog from './Sections/Content_Blog'
import Details_Card from "./Sections/Details_Card"
import Hero_Section_Blog from './Sections/Hero_Section_Blog'
import { Routes,Route } from 'react-router-dom'



const BlogRouter = () => {
  return (
  <>
    <Routes>
      <Route path="" element={
        <>
          <Hero_Section_Blog/>
          <Content_Blog/>
        </>
      }/>
      <Route path=":_id" element={<Details_Card/>}/>
    </Routes>
  </>
  )
}

export default BlogRouter