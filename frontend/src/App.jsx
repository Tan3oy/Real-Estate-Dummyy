import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sticky_Header from './Components/Sticky_Header/Sticky_Header'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Property_Routes from './Pages/Properties/Featured Properties/Property_Routes'
import Pricing_plan from './Pages/Pricing Plan/Pricing_plan'
import Pages_Routes from './Pages/Pages/Pages_Routes'
// import Blog from './Pages/Blog/Blog'
import Details_Card from './Pages/Blog/Sections/Details_Card'
import Contact from './Pages/Contact/Contact'
import ScrollTopbtn from './Components/ScrollTopbtn'
import Footer_Find_Estate from './Components/Footer_Find_Estate/Footer_Find_Estate'
import BlogRouter from './Pages/Blog/BlogRouter'
import Hero_property_select from './Components/Hero_property_select'
import { allPropertyCards } from './Components/Property_Filters'
import Terms_And_Conditions from './Pages/Terms_And_Conditions/Terms_And_Conditions'
import Privacy_Policy from './Pages/Privacy_Policy/Privacy_Policy'

function App() {
  
  return (
    <>
      <div>
        <Sticky_Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/properties/*" element={<Property_Routes/>}/>
          <Route path="/pages/*" element={<Pages_Routes/>}/>
          <Route path="/blog/*" element={<BlogRouter/>}/> 
          <Route path='/pricing_plan' element={<Pricing_plan/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/terms_and_conditions' element={<Terms_And_Conditions/>}/>
          <Route path='/privacy_policy' element={<Privacy_Policy/>}/>
        </Routes>
        <ScrollTopbtn/>
        <Footer_Find_Estate />
      </div>     
    </>
  )
}

export default App
