import React from "react";
import {
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import styles from "./Footer.module.css";
import Logo from "../Navigation/Logo/Logo";

const Footer = () => (
  <section className={styles.footerContainer}>
    <div className={styles.mainLinks}>
      <div className={styles.logo}>
        <Logo />{" "}
      </div>
      <div className={styles.topLinks}>
        <h6>Top Links</h6>
        <p>About Us</p>
        <p>Path Towels</p>
        <p>Face Towels</p>
        <p>Contact Us</p>
      </div>
      <div className={styles.myAccount}>
        <h6>My Account</h6>
        <p>My Profile</p>
        <p>Shopping Cart</p>
        <p>Wishlist</p>
        <p>Logout</p>
      </div>
      <div className={styles.ourTeams}>
        <h6>Our Teams</h6>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>FAQ</p>
      </div>
      <div className={styles.underLine}></div>
      <div className={styles.socialIcons}>
        <FaFacebookF />
        <FaPinterest />
        <FaTwitter />
        <FaInstagram />
      </div>
      <div className={styles.rights}>
        <p className={styles.rightsText}>
          © 2021 <span>PSdigital</span>.All Rights Reserved.
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
