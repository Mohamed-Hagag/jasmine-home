import React from "react";
import styles from "./Logo.module.css";
import logo from "../../../assets/images/download.png";
import { NavLink } from "react-router-dom";

const Logo = () => (
  <NavLink to="/">
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
  </NavLink>
);
export default Logo;
