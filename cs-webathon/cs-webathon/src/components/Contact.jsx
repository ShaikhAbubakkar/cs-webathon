import React from 'react';
import '../../src/styles/Contact.css'; // Create this CSS file for Contact styles

const Contact = () => (
  <section className="contact">
    <h2>Contact Us</h2>
    <br />
    <ul className="contact-details">
      <li><strong>Email:</strong></li>
      <li>General Inquiries: <a href="mailto:info@edconnect.com">info@edconnect.com</a></li>
      <li>Support: <a href="mailto:support@edconnect.com">support@edconnect.com</a></li>
      <li>Partnership Opportunities: <a href="mailto:partners@edconnect.com">partners@edconnect.com</a></li>
    </ul>
    <ul className="contact-details">
      <li><strong>Phone:</strong></li>
      <li>Customer Support: +1-800-123-4567</li>
      <li>Office Hours: Monday - Friday, 9 AM - 6 PM (EST)</li>
    </ul>
    <ul className="contact-details">
      <li><strong>Address:</strong></li>
      <li>EdConnect, Inc.<br />123 Learning Lane<br />Education City, EC 12345</li>
    </ul>
    <ul className="contact-details">
      <li><strong>Social Media:</strong></li>
      <li>Follow us on Twitter: <a href="https://twitter.com/EdConnect" target="_blank">@EdConnect</a></li>
      <li>Like us on Facebook: <a href="https://www.facebook.com/EdConnect" target="_blank">EdConnect</a></li>
      <li>Connect with us on LinkedIn: <a href="https://www.linkedin.com/company/EdConnect" target="_blank">EdConnect</a></li>
    </ul>
  </section>
);

export default Contact;
