import React from "react";
import styles from "./Header.module.css";
import logo from "./assets/images/logo.png"; // Make sure to have the logo image in the appropriate directory

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={styles.navbar}>
        <a href="#home">Home</a>
        <a href="#container">Container</a>
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className={styles.headerIcons}>
        <i className="fa fa-search"></i>
        <i className="fa fa-user"></i>
      </div>
      <div id="menu-icon" className={`${styles.menuIcon} fa fa-bars`}></div>
    </header>
  );
};

export default Header;
