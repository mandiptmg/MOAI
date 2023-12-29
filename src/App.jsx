import { Routes,Route,useLocation } from "react-router-dom"
import Home from "./component/Home"
import Service from "./component/Service"
import About from "./component/About"
import Career from "./component/Career"
import Contact from "./component/Contact"
import Header from "./component/header and footer/Header"
import Footer from "./component/header and footer/Footer"
import {useEffect} from 'react'

useEffect(()=>{
  const {pathName} = useLocation;
  window.scroll(0,0);
},[pathName])
const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='mx-auto w-[75vw] max-w-7xl'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Service />} />
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
