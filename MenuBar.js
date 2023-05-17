import React from 'react';
import './MenuBar.css';
import logo from './logo.jpg';
function MenuBar() {
  return (
    <nav className="menu-bar">
     
     <div className="menu-logo">
      <img src={logo} alt="logo" />
    </div>

      <ul className="menu-items">
        <li><a href="#">Home</a></li>
        <li><a href="#">Tour Guide</a></li>
        <li><a href="#">Site Map</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">About Us</a></li>
       
        
        
        </ul>
        <button id='log-button'><a href="#">Login</a></button>
        <button id='log-button'><a href="#">Sign-up</a></button>
    </nav>
    
    
  );
}

export default MenuBar;