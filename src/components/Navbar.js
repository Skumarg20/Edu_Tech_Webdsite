
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
return (
  <div>
    <div className="contaniors">
<nav className="navbar">

<div className="logo col-md-3"><Link to="/"><span className="cha">Cha</span>mpionJEE</Link></div>

<ul className="nav-links">
  
  <input type="checkbox" id="checkbox_toggle" />
  <label for="checkbox_toggle" className="hamburger">&#9776;</label>
  
  <div className="menu col-md-9">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/Pricing">Pricing</Link></li>
  <li className="services">
  <Link to="/Mentorship">Mentorship</Link>
    
    <ul className="dropdown">
      <li><Link to="/Iitjee">IIT JEE </Link></li>
      <li><Link to="/neet">NEET</Link></li>

    </ul>
  </li>
    <li><Link to="/Counselling">Counselling</Link></li>
    <li><Link to="/Contact">Contact</Link></li>
  </div>
</ul>
</nav>
</div>

  <Outlet />
  </div>
  
)
}
