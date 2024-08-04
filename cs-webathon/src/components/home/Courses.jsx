import React from "react";
import styles from "./Courses.module.css";
import courseImg from "../../assets/images/dsa.png";

const Courses = () => {
  return (
    <section className={styles.courses}>
      <div className={styles.centerText}>
        <h5>Courses</h5>
        <h2>Explore Popular Courses</h2>
      </div>

      <div className={styles.coursesContent}>
        <div className={styles.row}>
          <img src={courseImg} alt="DSA" />
          <h4>Data Structures & Algorithms</h4>
          <p>For absolute beginners.</p>
          <h6>
            ₹0 <span>₹180</span>
          </h6>
          <a href="#" className={styles.btn}>
            Enroll Now
          </a>
        </div>

        <div className={styles.row}>
          <img src={courseImg} alt="Python" />
          <h4>Python Masterclass</h4>
          <p>For absolute beginners.</p>
          <h6>
            ₹0 <span>₹180</span>
          </h6>
          <a href="#" className={styles.btn}>
            Enroll Now
          </a>
        </div>

        <div className={styles.row}>
          <img src={courseImg} alt="ML" />
          <h4>Machine Learning</h4>
          <p>For absolute beginners.</p>
          <h6>
            ₹0 <span>₹180</span>
          </h6>
          <a href="#" className={styles.btn}>
            Enroll Now
          </a>
        </div>

        <div className={styles.row}>
          <img src={courseImg} alt="Frontend" />
          <h4>Frontend Development</h4>
          <p>For absolute beginners.</p>
          <h6>
            ₹0 <span>₹180</span>
          </h6>
          <a href="#" className={styles.btn}>
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
