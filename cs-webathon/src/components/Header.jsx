import React, { useRef } from 'react';
import useStickyHeader from '../hooks/useStickyHeader';
import '../styles/Header.css'; // Ensure this CSS file contains your header styles

const Header = () => {
  const headerRef = useRef(null);
  useStickyHeader(headerRef);

  return (
    <header ref={headerRef}>
      <a href="index.html" className="logo">
        <img src="src/assets/logo.png" alt="EdConnect" />
      </a>

      <ul className="navbar">
        <li><a href="index.html">Home</a></li>
        <li><a href="#Courses">Courses</a></li>
        <li><a href="#meet">Meet</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="header-icons">
        <a href="#"><i className="bx bx-user"></i></a>
        <div className="bx bx-menu" id="menu-icon"></div>
      </div>
    </header>
  );
};

export default Header;
