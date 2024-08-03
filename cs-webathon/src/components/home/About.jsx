import React from "react";
import styles from "./About.module.css";
import aboutImage from "./assets/images/about-image.jpg"; // Make sure to have the about image in the appropriate directory

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutImg}>
        <img src={aboutImage} alt="About" />
      </div>
      <div className={styles.text}>
        <h2>About Us</h2>
        <p>This is a description about your company or website.</p>
      </div>
    </section>
  );
};

export default About;
