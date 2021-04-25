import React, { useState, useEffect, Fragment } from "react";
import styles from "./FirstSlider.module.css";
import SecondSlider from "../SecondSlider/SecondSlider";

const FirstSlider = (props) => {
  const [width, setWidth] = useState();
  const [backgroundImage, setBackground] = useState(1);
  const { sliderNum } = props;
  useEffect(() => {
    let timeout = setTimeout(() => {
      setBackground(2);
    }, 5500);
    props.sliderNum(backgroundImage);
    return () => clearTimeout(timeout);
  }, [sliderNum]);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return backgroundImage === 1 ? (
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
                100% Egyptian
                <br /> Cotton Towels
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
    <SecondSlider sliderNum={props.sliderNum} />
  );
};

export default FirstSlider;

// const [backgroundImage, setBackground] = useState(1);
// useEffect(() => {
//   let timeout = setTimeout(() => {
//     setBackground(2);
//   }, 5000);
//   props.sliderNum(backgroundImage);
//   return () => clearTimeout(timeout);
// }, []);

// return backgroundImage === 1 ? (
//   <div
//     style={{
//       width: "100%",
//       height: "620px",
//       position: "relative",
//       overflow: "hidden",
//     }}
//   >
//     <div className={styles.container1}></div>
//     <div className={styles.container2}></div>
//     <div className={styles.container3}></div>
//     <div className={styles.container4}></div>
//     <div className={styles.container5}></div>
//     <div className={styles.container6}></div>

{
  /* <div className={styles.productDesc}>
  <div className={styles.wrapper}>
    <div className={styles.title}>
      <h2>
        100% Egyptian
        <br /> Cotton Towels
      </h2>
    </div>
    <div className={styles.descButton}>
      <button>SHOP NOW</button>
    </div>
  </div>
</div> */
}
//   </div>
// ) : (
// <SecondSlider sliderNum={props.sliderNum} />
// );
