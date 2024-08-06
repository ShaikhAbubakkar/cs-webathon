import React from 'react';
import '../../src/styles/About.css'; // Create this CSS file for About styles

const About = () => (
  <section id="about">
    <div className="about-img">
      <img src="src/assets/about-us-page.png" alt="About" />
    </div>
    <div className="text">
      <h2>About Us</h2>
      <br />
      <br />
      <p>
        At EdConnect, our mission is to revolutionize education by providing an accessible, engaging, and comprehensive learning platform. We believe that education is the key to unlocking potential and building a brighter future. Our team is dedicated to creating a seamless learning experience that caters to students of all ages and backgrounds. With a rich library of courses, interactive tools, and a supportive community, EdConnect empowers learners to achieve their goals and excel in their academic pursuits.
      </p>
    </div>
  </section>
);

export default About;
