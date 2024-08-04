import React from "react";
import styles from "./Home.module.css";
import heroImg from "../../assets/images/hero.png";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.homeText}>
        <h6>Discover our range of online courses tailored for your needs.</h6>
        <h1>
          Computing Syndicate offers innovative educational resources at your
          fingertips.
        </h1>
        <p>Shape your future with us—where learning connects.</p>
        <div className={styles.latter}>
          <form>
            <input type="email" placeholder="Write Your Email" required />
            <input type="submit" value="Let's Start" required />
          </form>
        </div>
      </div>
      <div className={styles.homeImg}>
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Home;
