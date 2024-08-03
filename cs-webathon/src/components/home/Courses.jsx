import React from "react";
import styles from "./Courses.module.css";

const Courses = () => {
  return (
    <section className={styles.courses} id="courses">
      <div className={styles.centerText}>
        <h5>Our Courses</h5>
        <h2>Choose the Best Course for You</h2>
      </div>
      <div className={styles.coursesContent}>
        <div className={styles.row}>
          <img src="../images/course1.jpg" alt="Course 1" />
          <div className={styles.coursesText}>
            <h5>Course Title 1</h5>
            <p>Description for course 1.</p>
          </div>
        </div>
        <div className={styles.row}>
          <img src="../images/course2.jpg" alt="Course 2" />
          <div className={styles.coursesText}>
            <h5>Course Title 2</h5>
            <p>Description for course 2.</p>
          </div>
        </div>
        <div className={styles.row}>
          <img src="../images/course3.jpg" alt="Course 3" />
          <div className={styles.coursesText}>
            <h5>Course Title 3</h5>
            <p>Description for course 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
