import React, { useState } from "react";
import Header from "../components/Header";
import vectorPic from "../assets/vectorPic.jpg";
import styles from "../styles.module.css";

function EnterToken() {
  const [token, setToken] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.Tokencenter}>
        <div className={styles.tokenpic}>
          <img src={vectorPic} alt="Token" />
        </div>
        <form onSubmit={submitHandler}>
          <div className={styles.inputContainer}>
            <label>Enter Token</label>
            <input
              type="number"
              onChange={(e) => setToken(e.target.value)}
              value={token}
              placeholder="Enter Token"
            />
          </div>
          <button
            type="submit"
            className={styles.btn2}
            isLoading
            loadingText="Submitting Data..."
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnterToken;
