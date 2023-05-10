import React from 'react';
import './MenuBar.css';
import { Link } from 'react-router-dom';

function MenuBar() {
  return (
    <nav className="menu-bar">
      <div className="menu-logo">
        <img src='.\images\logo.jpg' alt="Logo" />
      </div>
      <ul className="menu-items">
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/Tour-Guide">Tour Guide</Link></li>
        <li><Link to="/Site-Map">Site Map</Link></li>
        <li><Link to="/Contact-us">Contact Us</Link></li>
        <li><Link to='/aboutus'>About Us</Link></li>
        
       
        
        
        </ul>
        <button id='log-button'><a href="#">Login/Sign-up</a></button>
    </nav>
    
    
  );
}

export default MenuBar;

