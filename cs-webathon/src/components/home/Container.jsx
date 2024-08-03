import React from "react";
import styles from "./Container.module.css";

const Container = () => {
  return (
    <section className={styles.container} id="container">
      <div className={styles.containerBox}>
        <div className={styles.containerText}>
          <h4>Container Title</h4>
          <p>Some description for the container.</p>
        </div>
      </div>
      <div className={styles.containerBox}>
        <div className={styles.containerText}>
          <h4>Container Title</h4>
          <p>Some description for the container.</p>
        </div>
      </div>
      <div className={styles.containerBox}>
        <div className={styles.containerText}>
          <h4>Container Title</h4>
          <p>Some description for the container.</p>
        </div>
      </div>
    </section>
  );
};

export default Container;
