import React from "react";
import styles from "./about.module.css";
import aboutImg from "../../assets/images/about-us-page.png";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutImg}>
        <img src={aboutImg} alt="About Us" />
      </div>
      <div className={styles.aboutText}>
        <h5>About Us</h5>
        <h2>Why Choose Us?</h2>
        <p>
          We are dedicated to providing the best educational content and
          resources to help you achieve your learning goals. Our courses are
          designed by industry experts and tailored to meet your needs.
        </p>
      </div>
    </section>
  );
};

export default About;
