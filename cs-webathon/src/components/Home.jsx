import React from 'react';
import '../../src/styles/Home.css'; // Create this CSS file for Home styles

const Home = () => (
  <section className="home" id="home">
    <div className="home-text">
      <h6>Discover our range of online courses tailored for your needs.</h6>
      <h1>Computing Syndicate offers innovative educational resources at your fingertips.</h1>
      <p>Shape your future with us—where learning connects.</p>

      <div className="latter">
        <form>
          <input type="email" placeholder="Write Your Email" required />
          <input type="submit" value="Let's Start" required />
        </form>
      </div>
    </div>

    <div className="home-img">
      <img src="src/assets/object.png" alt="" />
    </div>
  </section>
);

export default Home;
