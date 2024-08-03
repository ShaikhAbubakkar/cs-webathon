import React from "react";
import styles from "./Home.module.css";
import homeImage from "C:UsersShaikh Md. AbubakkarOneDriveDesktopcs-webathoncs-webathonsrcassetsimagesobject.png";
const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.homeText}>
        <h1>Welcome to Our Website</h1>
        <h6>Your tagline goes here</h6>
        <p>This is a description of your website.</p>
      </div>
      <div className={styles.homeImage}>
        <img src={homeImage} alt="Home" />
      </div>
    </section>
  );
};

export default Home;
