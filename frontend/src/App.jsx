import './App.css'
import Navbar from './Components/Navbar'
import Sticky_Header from './Components/Sticky_Header/Sticky_Header'
import Footer_Find_Estate from './Components/Footer_Find_Estate/Footer_Find_Estate'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Pricing_plan from './Pages/Pricing Plan/Pricing_plan'
    import Page_1 from './Pages/Pages/Sections/Page_1'
    import Page_2 from './Pages/Pages/Sections/Page_2'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import { Route, Routes } from 'react-router-dom'
import FAQ from './Pages/Pages/Sections/FAQ'

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
              <Route path="/page_1" element={<Page_1 />} />
              <Route path="/page_2" element={<Page_2 />} />
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
        <Footer_Find_Estate />
      </div>     
    </>
  )
}

export default App
