import React from "react";
import styles from "./styles.module.css";
import { Tabletwo } from "../../components/table 2/tabletwo";
import Navbar from "../../components/Navbar/Navbar";
export const Log = () => {
  return (
    <>
     <div className={styles.tableContainer}>
        <Navbar />
        <div className={styles.table2}>
            <Tabletwo />
        </div>
      </div>
        
    </>
  );
};
export default Log;
