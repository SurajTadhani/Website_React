// https://create-react-app.dev/docs/deployment


import React from 'react'
import Home from './Components/Home'
import Service from './Components/Service'
import Contact from './Components/Contact'
import About from './Components/About'
import { Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar'
import Footer from './Components/Footer'
 import './App.css'

// import { Navigate} from 'react-router-dom';


function App() {
 

  return (
    <>
    <Navbar />
     <Routes>
     
     <Route exact path='/' element={<Home />} />
     <Route exact path='/about' element={<About />} />
     <Route exact path='/service' element={<Service />} />
     <Route exact path='/contact' element={<Contact />} />
     {/* <Route render={() =>  <Navigate replace to="/" />} /> */}
     
   </Routes>
   <Footer />
  
    </>
  )
}

export default App
