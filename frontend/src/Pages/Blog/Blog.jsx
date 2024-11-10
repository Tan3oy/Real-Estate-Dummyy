import React from 'react'
import Counter_blog from './Sections/Counter_blog'
import Content_Blog from './Sections/Content_Blog'
import Hero_Section_Blog from './Sections/Hero_Section_Blog'

const Blog = () => {
  return (
    <>
        <Hero_Section_Blog/>
        <Counter_blog/>
        <Content_Blog/>
    </>
  )
}

export default Blog