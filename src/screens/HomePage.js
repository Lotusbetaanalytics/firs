import React from "react";
import Header from "../components/Header";
import avatar from "../assets/avatar.png";
import styles from "../styles.module.css";

function HomePage() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.welcome}>
        <div className={styles.logo}>
          <img src={avatar} alt="FIRS" />
        </div>
        <div className={styles.welcomeQuote}>
          <h1>Welcome</h1>
          <h3>
            Connect to the FIRS to get better Understanding on your tax rates,
            pay your taxes and visit our webistes for more information.
          </h3>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
