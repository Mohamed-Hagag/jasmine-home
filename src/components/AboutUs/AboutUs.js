import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => (
  <section className={styles.aboutUs}>
    <div className={styles.aboutTitle}>
      <p>W E L C O M E</p>
      <h2>
        OUR 10 YEARS WORKING EXPERIENCE
        <br /> MAKE A DIFFERENT TOWELS.
      </h2>
    </div>
    <div className={styles.line}></div>
    <div className={styles.aboutDesc}>
      <p>
        Donec scelerisque dolor id nunc dictum, interdum gravida mauris rhoncus.
        Aliquam at ultrices nunc. In sem leo, fermentum at lorem in, porta
        finibus mauris. Aliquam consectetur, ex in gravida porttitor, Donec
        scelerisque dolor id nunc dictum, interdum gravida mauris rhoncus.
        Aliquam at ultrices nunc. In sem leo, fermentum at lorem in, porta
        finibus mauris.
      </p>
    </div>
  </section>
);

export default AboutUs;
