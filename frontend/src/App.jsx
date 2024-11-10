import './App.css'
import Home from './Pages/Home/Home'
// import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>     
    </>
  )
}

export default App
