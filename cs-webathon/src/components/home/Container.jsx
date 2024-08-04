import React from "react";
import styles from "./Container.module.css";
import certificate from "../../assets/images/certificates.svg";
import user from "../../assets/images/user.svg";
import courses from "../../assets/images/courses.svg";
import tutor from "../../assets/images/tutors.svg";

const Container = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerBox}>
        <div className={styles.containerImg}>
          <img src={user} alt="User" />
        </div>
        <div className={styles.containerText}>
          <h4>5k</h4>
          <p>Online Courses</p>
        </div>
      </div>
      <div className={styles.containerBox}>
        <div className={styles.containerImg}>
          <img src={certificate} alt="Certificates" />
        </div>
        <div className={styles.containerText}>
          <h4>5k</h4>
          <p>Online Courses</p>
        </div>
      </div>
      <div className={styles.containerBox}>
        <div className={styles.containerImg}>
          <img src={tutor} alt="Tutors" />
        </div>
        <div className={styles.containerText}>
          <h4>5k</h4>
          <p>Online Courses</p>
        </div>
      </div>
      <div className={styles.containerBox}>
        <div className={styles.containerImg}>
          <img src={courses} alt="Courses" />
        </div>
        <div className={styles.containerText}>
          <h4>5k</h4>
          <p>Online Courses</p>
        </div>
      </div>
    </section>
  );
};

export default Container;
