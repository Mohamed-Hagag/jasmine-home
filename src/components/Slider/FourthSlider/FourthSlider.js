import React, { useState, useEffect, Fragment } from "react";
import styles from "./FourthSlider.module.css";
import FirstSlider from "../FirstSlider/FirstSlider";

const FourthSlider = (props) => {
  const [width, setWidth] = useState();
  const [backgroundImage, setBackground] = useState(4);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setBackground(1);
    }, 5500);
    props.sliderNum(backgroundImage);
    return () => clearTimeout(timeout);
  }, []);

  return backgroundImage === 4 ? (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.layerContainer}>
          <div
            className={styles.firstLayer}
            style={{
              backgroundPosition: "0 0",
            }}
          ></div>
        </div>
        <div className={styles.layerContainer}>
          <div
            className={styles.secondLayer}
            style={{
              backgroundPosition: `-${(width * 20) / 100}px`,
            }}
          ></div>
        </div>
        <div className={styles.layerContainer}>
          <div
            className={styles.thirdLayer}
            style={{
              backgroundPosition: `-${(width * 40) / 100}px`,
            }}
          ></div>
        </div>
        <div className={styles.layerContainer}>
          <div
            className={styles.fourthLayer}
            style={{
              backgroundPosition: `-${(width * 60) / 100}px`,
            }}
          ></div>
        </div>
        <div className={styles.layerContainer}>
          <div
            className={styles.fifthLayer}
            style={{
              backgroundPosition: `-${(width * 80) / 100}px`,
            }}
          ></div>
        </div>
      </div>
      <div className={styles.productDescContainer}>
        <div className={styles.productDesc}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h2>
                Elegant European
                <br /> Design
              </h2>
            </div>
            <div className={styles.descButton}>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <FirstSlider sliderNum={props.sliderNum} />
  );
};
export default FourthSlider;
