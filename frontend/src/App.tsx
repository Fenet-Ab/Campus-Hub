
import {Route,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar.tsx";

import Home from './pages/Home/Home.tsx'
import About from './pages/About/About.tsx'



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
