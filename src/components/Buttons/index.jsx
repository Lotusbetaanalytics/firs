import React from "react";
import styles from "../styles.module.css";

function Buttons(props) {
  return (
    <div>
      <div className={styles.btnContainer}>
      <div className={styles.firsbtn}>
        <h4>{props.children}</h4>
      </div>
      </div>
    </div>
  );
}

export default Buttons;
