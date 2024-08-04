import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="index.html" className={styles.logo}>
        <img src={logo} alt="ComputingSyndicate" />
      </a>
      <ul className={styles.navbar}>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="#Courses">Courses</a>
        </li>
        <li>
          <a href="#meet">Meet</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={styles.headerIcons}>
        <a href="#">
          <i className="bx bx-user"></i>
        </a>
        <div className="bx bx-menu" id={styles.menuIcon}></div>
      </div>
    </header>
  );
};

export default Header;
