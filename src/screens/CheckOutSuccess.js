import React, { useEffect } from "react";
import Header from "../components/Header";
import successIcon3 from "../assets/successIcon3.png";
import styles from "../styles.module.css";
import { useNavigate } from "react-router-dom";

function CheckOutSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/entertoken");
    }, 2000);
  }, [navigate]);

  return (
    <div>
      <div className={styles.app}>
        <Header />
        <div className={styles.successcheck}>
          <div className={styles.successTitle}>
            <div>Check-Out Successful</div>
          </div>
          <div className={styles.successPic}>
            <img src={successIcon3} alt="Success Check" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutSuccess;
