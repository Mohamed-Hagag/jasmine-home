import React from "react";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import {
  FaEnvelope,
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import productImg from "../../assets/images/product13.webp";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => (
  <section className={styles.contactContainer}>
    <div className={styles.contactInfo}>
      <p className={styles.title}>CONTACT INFO</p>
      <div className={styles.underLine}></div>
      <p className={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum.
      </p>
      <div className={styles.iconWrapper}>
        <div className={styles.locationIcon}>
          <HiLocationMarker />
        </div>
        <p className={styles.iconText}> Dambo dika,USA,road123</p>
      </div>
      <div className={styles.iconWrapper}>
        <div className={styles.locationIcon}>
          <FaEnvelope />
        </div>
        <p className={styles.iconText}> dotsee@one.com</p>
      </div>
      <div className={styles.iconWrapper}>
        <div className={styles.locationIcon}>
          <HiPhone />
        </div>
        <p className={styles.iconText}> (+11) 987654321</p>
      </div>
      <p className={styles.follow}>Follow Us</p>
      <div className={styles.socialIcons}>
        <FaFacebookF />
        <FaPinterest />
        <FaTwitter />
        <FaInstagram />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <img src={productImg} alt="productImg" />
    </div>
  </section>
);

export default ContactInfo;
