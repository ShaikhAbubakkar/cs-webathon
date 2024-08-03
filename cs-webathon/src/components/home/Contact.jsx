import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Us</h2>
      <ul className={styles.contactDetails}>
        <li>
          <strong>Address:</strong>
          <p>1234 Street Name, City, Country</p>
        </li>
        <li>
          <strong>Email:</strong>
          <p>
            <a href="mailto:info@example.com">info@example.com</a>
          </p>
        </li>
        <li>
          <strong>Phone:</strong>
          <p>
            <a href="tel:+123456789">+123456789</a>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
