import React from 'react'
import './Header.css'

function Header() {

  const handleViewMenuClick = () => {
    // Scroll to the menu section
    const menuSection = document.getElementById('explore-menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='header' id='header'>
      <div className="header-contents">
        <h2>Order your favourite food here!</h2>
        <p>Experience culinary excellence at PlateMate. Indulge in expertly crafted dishes bursting with flavor, served with a side of warm hospitality. Your next unforgettable dining adventure awaits!</p>
        <button onClick={handleViewMenuClick}>View Menu</button>
      </div>
    </div>
  )
}

export default Header
