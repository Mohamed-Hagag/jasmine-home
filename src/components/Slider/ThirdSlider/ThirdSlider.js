import React, { useState, useEffect, Fragment } from "react";
import styles from "./ThirdSlider.module.css";
import FourthSlider from "../FourthSlider/FourthSlider";

const ThirdSlider = (props) => {
  const [width, setWidth] = useState();
  const [backgroundImage, setBackground] = useState(3);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setBackground((prevBackground) => prevBackground + 1);
    }, 5500);
    props.sliderNum(backgroundImage);
    return () => clearTimeout(timeout);
  }, []);

  return backgroundImage === 3 ? (
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
              <h2>The Best Bath Towels </h2>
              <p>According to Textile Experts</p>
            </div>
            <div className={styles.descButton}>
              <button>FEEDBACK</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <FourthSlider sliderNum={props.sliderNum} />
  );
};
export default ThirdSlider;
