import React from "react";
import styles from "./styles.module.css";
import { Tabletwo } from "../../components/table 2/tabletwo";
import Navbar from "../../components/Navbar/Navbar";
export const Log = () => {
  return (
    <>
      <Navbar />
      <div className={styles.customPadding_}>
        <Tabletwo />
      </div>
    </>
  );
};
export default Log;
