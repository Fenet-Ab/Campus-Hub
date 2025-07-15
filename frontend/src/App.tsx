import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./components/Header/Header.jsx";
import Content from './components/Content/Content.jsx'
import Home from './pages/Home/Home'
import About from './pages/About/About.jsx'



function App() {
 

  return (
    <>
      <div>
        <Navbar />
      
         <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
       </Routes>
      

      </div>
        
      
    </>
  )
}

export default App
