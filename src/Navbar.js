import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add an event listener for window resize when the component mounts.
    window.addEventListener('resize', changeWidth);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []); // The empty dependency array ensures the effect runs once when the component mounts.

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h1>FOODISH</h1>
        </div>
        <div className={`btn ${toggleMenu ? 'active' : ''}`} onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* Use a ternary expression to conditionally render the menu based on screen width */}
        {toggleMenu || screenWidth > 576 ? (
          <ul className="list">
            <li className="items">Home</li>
            <li className="items">Services</li>
            <li className="items">Contact</li>
            <li className="items">Info</li>
          </ul>
        ) : null /* You can also use a fragment <></> instead of null */}
      </nav>
    </div>
  );
};

export default Navbar;
