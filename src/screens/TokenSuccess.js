import React, { useEffect } from "react";
import styles from "../styles.module.css";
import successIcon3 from "../assets/successIcon3.png";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function TokenSuccess() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/gettokeninfo");
    }, 1000);
  }, [navigate]);
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.successcheck}>
        <div className={styles.successTitle}>
          <div>Check-In Successful</div>
        </div>
        <div className={styles.successPic}>
          <img src={successIcon3} alt="Success Check" />
        </div>
      </div>
    </div>
  );
}

export default TokenSuccess;
