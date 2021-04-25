import React from "react";
import { withRouter } from "react-router";
import styles from "./SideToggle.module.css";

const SideToggle = (props) => (
  <div
    className={styles.sideToggle}
    onClick={() => {
      props.clicked();
      console.log(props);
    }}
  >
    <div
      className={`${styles.first} ${props.scrolled && styles.goldenColor} ${
        props.location.pathname !== "/" && styles.goldenColor
      }`}
    ></div>
    <div
      className={`${styles.second} ${props.scrolled && styles.goldenColor} ${
        props.location.pathname !== "/" && styles.goldenColor
      }`}
    ></div>
    <div
      className={`${styles.third} ${props.scrolled && styles.goldenColor} ${
        props.location.pathname !== "/" && styles.goldenColor
      }`}
    ></div>
    <div
      className={`${styles.fourth} ${props.scrolled && styles.goldenColor} ${
        props.location.pathname !== "/" && styles.goldenColor
      }`}
    ></div>
  </div>
);
export default withRouter(SideToggle);
