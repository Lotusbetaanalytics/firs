import React from "react";
import Navigation from "../components/Navigation";
import avatar from "../assets/avatar.png";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import ParticlesComponent from "../components/UI/Particles";

const Home = () => {
  return (
    <div>
      <Navigation />
      <ParticlesComponent />
      <div className={styles.contentx}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src={avatar} alt="Avatar" />
          </div>

          <div className={styles.card}>
            <div className={styles.formContainer}>
              <h1>Welcome 🙂</h1>
              <p>Nice to see you again!</p>
            </div>
            <div className={styles}>
              <div className={styles.formContainer}>
                <Link
                  to="/newGuest"
                  className={`${styles.btn} ${styles.green}`}
                >
                  New Guest
                </Link>
              </div>

              <div className={styles.formContainer}>
                <Link
                  to="/returningGuest"
                  className={`${styles.btn} ${styles.dark}`}
                >
                  Returning Guest
                </Link>
              </div>

              <div className={styles.formContainer}>
                <Link to="/prebooked" className={`${styles.btn} ${styles.red}`}>
                  Prebooked Guest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
