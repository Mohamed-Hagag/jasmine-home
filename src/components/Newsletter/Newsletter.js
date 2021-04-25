import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import styles from "./Newsletter.module.css";

const Newsletter = () => (
  <section className={styles.newsletterContainer}>
    <div className={styles.layer}>
      <div className={styles.newsletterText}>
        <p className={styles.title}>SUBSCRIBE NEWSLETTER.</p>
        <div className={styles.underLine}></div>
        <p className={styles.text}>
          Hi ! Use the link below to verify your email and start enjoying
          cleanmock.
        </p>
      </div>
      <div className={styles.newsletterInput}>
        <input type="text" placeholder="   Enter your keywords....." />
        <button className={styles.envelopeButton}>
          <FaEnvelopeOpenText />
        </button>
        <div className={styles.questions}>
          <span className={styles.questionsText}>Questions? Email us at</span>
          <span className={styles.email}> feedback@jasmine.com</span>
        </div>
      </div>
    </div>
  </section>
);

export default Newsletter;
