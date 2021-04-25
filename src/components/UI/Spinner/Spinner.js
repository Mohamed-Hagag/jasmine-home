import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}>
      <div className={styles["double-bounce1"]}></div>
      <div className={styles["double-bounce2"]}></div>
    </div>
  </div>
);
export default Spinner;
