import React from "react";
import styles from "../styles.module.css";
import successIcon3 from "../assets/successIcon3.png";

function TokenSuccess() {
  return (
    <div className={styles.app}>
      <div className={styles.successcheck}>
        <div className={styles.successTitle}>
          <h2>Token Success</h2>
        </div>
        <div className={styles.successPic}>
          <img src={successIcon3} alt="Success Check" />
        </div>
      </div>
    </div>
  );
}

export default TokenSuccess;
