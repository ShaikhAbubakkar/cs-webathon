import React from "react";
import "../../src/styles/Contact.css";

const Contact = () => (
  <section className="contact">
    <h2>Contact Us</h2>
    <br />
    <ul className="contact-details">
      <li>
        <strong>Email:</strong>
      </li>
      <li>
        General Inquiries:{" "}
        <a href="mailto:info@computingsyndicate.com">
          info@computingsyndicate.com
        </a>
      </li>
      <li>
        Support:{" "}
        <a href="mailto:support@computingsyndicate.com">
          support@computingsyndicate.com
        </a>
      </li>
      <li>
        Partnership Opportunities:{" "}
        <a href="mailto:partners@computingsyndicate.com">
          partners@computingsyndicate.com
        </a>
      </li>
    </ul>
    <ul className="contact-details">
      <li>
        <strong>Phone:</strong>
      </li>
      <li>Customer Support: +1-800-123-4567</li>
      <li>Office Hours: Monday - Friday, 9 AM - 6 PM (EST)</li>
    </ul>
    <ul className="contact-details">
      <li>
        <strong>Address:</strong>
      </li>
      <li>
        ComputingSyndicate, Inc.
        <br />
        123 Learning Lane
        <br />
        Education City, EC 12345
      </li>
    </ul>
    <ul className="contact-details">
      <li>
        <strong>Social Media:</strong>
      </li>
      <li>
        Follow us on Twitter:{" "}
        <a href="https://twitter.com/ComputingSyndicate" target="_blank">
          @ComputingSyndicate
        </a>
      </li>
      <li>
        Like us on Facebook:{" "}
        <a href="https://www.facebook.com/ComputingSyndicate" target="_blank">
          ComputingSyndicate
        </a>
      </li>
      <li>
        Connect with us on LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/company/ComputingSyndicate"
          target="_blank"
        >
          ComputingSyndicate
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
