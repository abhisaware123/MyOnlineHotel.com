import React from 'react';

const Navbar = () => {
  return(
      <>
        <h1>Navbar will be Here</h1>
        <nav className="nav-container">
            <div className="logo">
            </div>
            <div className="nav-components">
                <ul className="tabs">
                    <li className="tabs-list">HOME</li>
                    <li className="tabs-list">About Us</li>
                    <li className="tabs-list">Services</li>
                    <li className="tabs-list">Contact</li>
                    <li className="tabs-list">Location</li>
                </ul>
            </div>
        </nav>
      </>
      
  );
};

export default Navbar;
