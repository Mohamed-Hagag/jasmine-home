import React, { useState, useEffect, Fragment } from "react";
import styles from "./Slider.module.css";
import FirstSlider from "./FirstSlider/FirstSlider";
import SecondSlider from "./SecondSlider/SecondSlider";
import ThirdSlider from "./ThirdSlider/ThirdSlider";
import FourthSlider from "./FourthSlider/FourthSlider";

const Slider = () => {
  const [backgroundImage, setBackground] = useState(1);
  const backgroundChangeHandler = (slider) => {
    setBackground(slider);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderToggle}>
        <div
          onClick={() => setBackground(1)}
          style={
            backgroundImage === 1
              ? { width: "100%", transition: "width 0.5s" }
              : null
          }
        />
        <div
          onClick={() => setBackground(2)}
          style={
            backgroundImage === 2
              ? { width: "100%", transition: "width 0.5s" }
              : null
          }
        />
        <div
          onClick={() => setBackground(3)}
          style={
            backgroundImage === 3
              ? { width: "100%", transition: "width 0.5s" }
              : null
          }
        />
        <div
          onClick={() => setBackground(4)}
          style={
            backgroundImage === 4
              ? { width: "100%", transition: "width 0.5s" }
              : null
          }
        />
      </div>
      {backgroundImage === 1 && (
        <FirstSlider sliderNum={backgroundChangeHandler} />
      )}
      {backgroundImage === 2 && (
        <SecondSlider sliderNum={backgroundChangeHandler} />
      )}
      {backgroundImage === 3 && (
        <ThirdSlider sliderNum={backgroundChangeHandler} />
      )}
      {backgroundImage === 4 && (
        <FourthSlider sliderNum={backgroundChangeHandler} />
      )}
    </div>
  );
};

export default Slider;
