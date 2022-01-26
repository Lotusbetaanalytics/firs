import React from "react";
import styles from "./styles.module.css";

const Input = ({label,type,onChange,value}) => {
  return (
    <div>
      <div className={styles.inputContainer_}>
        <label>{label}</label>
        <input
          type={type}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
