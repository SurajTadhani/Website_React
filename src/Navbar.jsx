import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
   
      <>
      <div className='container-fluid nav_bg '>
      <div className='row'>
        <div className='col-10 mx-auto'>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
    <NavLink  className="navbar-brand" to="/">Radhe Enterprice</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent" style={{justifyContent:'end'}}>
      <div className=''>
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className="nav-link menu_active" aria-current="page" to="/">Home</NavLink>
        </li>
        
        
        <li className="nav-item">
          <NavLink  className="nav-link  menu_active" to="/service">Service</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className="nav-link menu_active" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className="nav-link menu_active" to="/contact">Contact</NavLink>
        </li>
        </ul>
        </div>
        {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      
    </div>
  </div>
</nav>
          </div>
      </div>
   </div>
      </>
   
  )
}

export default Navbar
