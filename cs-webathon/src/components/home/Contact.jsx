import React from "react";
import styles from "./Contact.module.css";
import contactImg from "../../assets/images/contact-us.jpg";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactText}>
        <h5>Contact Us</h5>
        <h2>Get In Touch</h2>
        <form action="#">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className={styles.btn}>
            Send Message
          </button>
        </form>
      </div>
      {/* <div className={styles.contactImg}>
        <img src={contactImg} alt="Contact Us" />
      </div> */}
    </section>
  );
};

export default Contact;
