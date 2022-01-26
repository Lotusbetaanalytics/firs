import React from "react";
import Header from "../components/Header";
import avatar from "../assets/avatar.png";
import styles from "../styles.module.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.welcome}>
        <div className={styles.logo}>
          <img src={avatar} alt="FIRS" />
        </div>
        <div className={styles.welcomeQuote}>
          <h1>Visitors Management System</h1>
          <h2>Welcome,</h2>
          <h4>
            Connect to the FIRS to get better understanding on your tax rates,
            pay your taxes and visit our webistes for more information.
          </h4>
          <div className={styles.btnContainer}>
            <Link to="/entertoken" className={styles.btn}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
