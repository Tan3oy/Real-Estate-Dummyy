import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Page_1 from './Page 1/Page_1'
import Page_2 from './Page 2/Page_2'
import FAQ from './FAQ/FAQ'

const Pages_Routes = () => {
  return (
    <div>
    <Routes>
        <Route path="page_1" element={<Page_1/>}/>
        <Route path="page_2" element={<Page_2/>}/>
        <Route path="faq" element={<FAQ/>}/>
    </Routes>
    </div>
  )
}

export default Pages_Routes