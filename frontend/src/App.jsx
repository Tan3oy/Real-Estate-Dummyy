import './App.css'
import Navbar from './Components/Navbar'
import Sticky_Header from './Components/Sticky_Header/Sticky_Header'
import Footer_Find_Estate from './Components/Footer_Find_Estate/Footer_Find_Estate'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Pricing_plan from './Pages/Pricing Plan/Pricing_plan'

import All_Properties from './Pages/Properties/All Properties/All_Properties'
import Featured_Properties from './Pages/Properties/Featured Properties/Featured_Properties'
import Top_Properties from './Pages/Properties/Top Properties/Top_Properties'
import Urgent_Properties from './Pages/Properties/Urgent Properties/Urgent_Properties'
import Agents from './Pages/Properties/Agents/Agents'

    import Page_1 from './Pages/Pages/Page 1/Page_1'
    import Page_2 from './Pages/Pages/Page 2/Page_2'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import { Route, Routes } from 'react-router-dom'
import FAQ from './Pages/Pages/FAQ/FAQ'
import Property_details from './Pages/Properties/All Properties/Sections/Property_details'
import ScrollTopbtn from './Components/ScrollTopbtn'
import Hero_Property from './Pages/Properties/Featured Properties/Sections/Hero_Property'
import Property_cards from './Pages/Properties/Featured Properties/Sections/Property_cards'
import {topPropertyCards,featuredPropertyCards, allPropertyCards, urgentPropertyCards} from './Components/Property_Filters'

function App() {
  
  return (
    <>
      <div>
        <Sticky_Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/pricing_plan' element={<Pricing_plan/>}/>

          <Route path='/all_properties' element={<All_Properties/>}/>
          <Route path='/all_properties/:_id' element={<Property_details/>}/>
          <Route path="/properties" element={<Hero_Property/>}>
            <Route path="top_properties" element={<Property_cards fetchedData={topPropertyCards()}/>}/>
            <Route path="featured_properties" element={<Property_cards fetchedData={featuredPropertyCards()}/>}/>
            <Route path="all_properties" element={<Property_cards fetchedData={allPropertyCards()}/>}/>
            <Route path="urgent_properties" element={<Property_cards fetchedData={urgentPropertyCards()}/>}/>
          </Route>
          <Route path='/top_properties' element={<Top_Properties/>}/>
          <Route path='/featured_properties' element={<Featured_Properties/>}/>
          <Route path='/urgent_properties' element={<Urgent_Properties/>}/>
          <Route path='/agents' element={<Agents/>}/>

              <Route path="/page_1" element={<Page_1 />} />
              <Route path="/page_2" element={<Page_2 />} />
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
       
        <ScrollTopbtn/>
        <Footer_Find_Estate />
      </div>     
    </>
  )
}

export default App
