// Navbar.jsx

import React, { useEffect } from 'react';
import './Navbar.css'; 

function Navbar() {
  useEffect(() => {
    const animateNavbarLinks = () => {
      let i = 1;
      const stop = 4; // Number of navigation links

      const intervalId = setInterval(() => {
        if (i > stop) {
          clearInterval(intervalId);
          return;
        }
        const element = document.getElementById(`len${i}`);
        if (element) {
          element.classList.toggle('bounce');
        }
        i++;
      }, 500);
    };

    animateNavbarLinks(); // Start the animation when the component mounts
  }, []);

  return (
    <div className="navbar-container">
      <nav className="cool-navbar">
      <ul className="nav-list">
  <li><a id="len1" className="hoverable" href="#home">Home</a></li>
  <li><a id="len2" className="hoverable" href="#work">Work</a></li>
  <li><a id="len3" className="hoverable" href="#about">About</a></li>
  <li><a id="len4" className="hoverable" href="#contact">Contact</a></li>
</ul>
      </nav>
    </div>
  );
}

export default Navbar;