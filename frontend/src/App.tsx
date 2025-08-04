
import {Route,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar.tsx";

import Home from './pages/Home/Home.tsx'
import About from './pages/About/About.tsx'
import Footer from './components/Footer/Footer.tsx';
import Forem from './pages/Forem/Forem.tsx'



function App() {
 

  return (
    <>
      <div>
        <Navbar />
      
         <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/forum'element={<Forem/>}/>

       </Routes>
       <Footer/>
      
      

      </div>
        
      
    </>
  )
}

export default App
