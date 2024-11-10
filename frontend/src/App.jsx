import './App.css'
import Navbar from './Components/Navbar'
import Sticky_Header from './Components/Sticky_Header'
import Home from './Pages/Home/Home'
// import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <div>
        <Sticky_Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>     
    </>
  )
}

export default App
