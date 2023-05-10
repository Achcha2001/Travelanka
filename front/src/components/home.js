import './SearchBar.css';
import "./OtherServices.css";

import React from 'react';


function Home() {
    return (
      <div className="travelanka">
        <div className="search-bar">
          <input type="text" placeholder="Search for your destination..." />
          <select name="category">
            <option value="select">Select Category</option>
            <option value="category1">Economical</option>
            <option value="category2">Deluxe</option>
            <option value="category3">Super Deluxe</option>
          </select>
          <button>Search</button>
        </div>
        <div className="description">
          <h2 className="description-header">
            Discover Your Perfect Journey with <span>Travelanka....</span>
          </h2>
          <p className="description-text">
            Embark on an unforgettable journey with Travelanka Tour Guide. Our
            web application helps you find the best hotels that cater to your
            budget and transportation needs, and connects you with experienced
            tour guides to enhance your travel experience. Whether you're looking
            for adventure or relaxation, Travelanka has got you covered. Start
            planning your dream vacation today and let us help you create memories
            that will last a lifetime!
          </p>
        </div>
        <div className="other-services">
          <h2 className="other-services-header">Other Services</h2>
          <div className="other-services-container">
            <div className="other-service">
              <a href="#">
                <img
                  src="../images/places-visit.jpg"
                  alt="Places to visit"
                  className="other-service-image"
                />
                <p className="other-service-name">Places to visit</p>
              </a>
            </div>
            <div className="other-service">
              <a href="">
                <img
                  src=".\images\tour-guide.jpg"
                  alt="Service 2"
                  className="other-service-image"
                />
                <p className="other-service-name">Tour Guides</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Home;
  