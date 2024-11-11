import './App.css'
import Navbar from './Components/Navbar'
import Sticky_Header from './Components/Sticky_Header'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Pricing_plan from './Pages/Pricing Plan/Pricing_plan'
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
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </div>     
    </>
  )
}

export default App
