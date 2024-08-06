import React from 'react';
import '../../src/styles/Courses.css'; // Create this CSS file for Courses styles

const Courses = () => (
  <section className="Courses">
    <div className="center-text">
      <h5>Courses</h5>
      <h2>Explore Popular Courses</h2>
    </div>

    <div className="courses-content">
      <div className="row">
        <img src="src/assets/dsa.png" alt="DSA" />
        <div className="courses-text">
          <h5>The Complete DSA course in JAVA</h5>
          <h6>3 Weeks</h6>
          <div className="rating">
            <div className="star">
              <a href="#"><i className="bx bxs-star"></i></a>
              <a href="#"><i className="bx bxs-star"></i></a>
              <a href="#"><i className="bx bxs-star"></i></a>
              <a href="#"><i className="bx bxs-star"></i></a>
              <a href="#"><i className="bx bxs-star"></i></a>
            </div>
            <div className="review">
              <p>5 reviews</p> {/* Fixed: Removed braces */}
            </div>
          </div>
        </div>
      </div>
      {/* Repeat for other course rows */}
    </div>
    <div className="main-btn">
      <a href="#" className="btn">Buy Now</a>
    </div>
  </section>
);

export default Courses;
