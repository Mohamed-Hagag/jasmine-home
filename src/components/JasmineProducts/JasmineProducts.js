import React, { useRef, useEffect, useState } from "react";
import styles from "./JasmineProducts.module.css";
import product1 from "../../assets/images/product3.jpg";
import product2 from "../../assets/images/product13.webp";
import product3 from "../../assets/images/product7.jpg";
import product4 from "../../assets/images/product11.jpg";
import { NavLink } from "react-router-dom";

const JasmineProducts = () => {
  const [offsetTop, setOffsetTop] = useState();
  const [innerWidth, setInnerWidth] = useState();
  useEffect(() => {
    setOffsetTop(window.pageYOffset);
    setInnerWidth(window.innerWidth);
    window.addEventListener("scroll", () => {
      setOffsetTop(window.pageYOffset);
    });
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
    return () => {
      setOffsetTop();
      setInnerWidth();
      window.removeEventListener("scroll", () => {
        setOffsetTop(window.pageYOffset);
      });
      window.removeEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <section className={styles.productsContainer}>
      <div className={styles.titleSection}>
        <div>
          <p>JASMINE PRODUCTS</p>
        </div>
        <div className={styles.titleLine}></div>
      </div>

      <div className={styles.product}>
        <div
          className={` ${styles.rightProductWrapper} ${
            innerWidth >= 820
              ? offsetTop >= 700
                ? styles.productAnimation
                : styles.productAnimationReturn
              : offsetTop >= 530
              ? styles.productAnimation
              : styles.productAnimationReturn
          }`}
        >
          <div
            style={
              innerWidth >= 700
                ? innerWidth <= 820
                  ? {
                      transform: `translateY(-${(offsetTop - 510) / 8}px)`,
                      transition: "transform 1s",
                    }
                  : {
                      transform: `translateY(-${(offsetTop - 650) / 4}px)`,
                      transition: "transform 1s",
                    }
                : {
                    transform: `translateY(-${(offsetTop - 650) / 13}px)`,
                    transition: "transform 1s",
                  }
            }
          >
            <img src={product1} alt="product1" />
          </div>
          <div className={styles.productDesc}>
            <h2>Textile Experts</h2>
            <p>LOREM IPSUM DOLOR SIT AMET IPSUM</p>
            <NavLink to="/">SHOP NOW</NavLink>
          </div>
        </div>
        <div
          className={` ${styles.leftProductWrapper} ${
            offsetTop >= 530
              ? styles.productAnimation
              : styles.productAnimationReturn
          }`}
        >
          <div
            style={
              innerWidth >= 700
                ? innerWidth <= 820
                  ? {
                      transform: `translateY(-${(offsetTop - 510) / 8}px)`,
                      transition: "transform 1s",
                    }
                  : {
                      transform: `translateY(-${(offsetTop - 450) / 4}px)`,
                      transition: "transform 1s",
                    }
                : {
                    transform: `translateY(-${(offsetTop - 600) / 20}px)`,
                    transition: "transform 1s",
                  }
            }
          >
            <img src={product2} alt="product2" />
          </div>
          <div className={styles.productDesc}>
            <h2>Textile Experts</h2>
            <p>LOREM IPSUM DOLOR SIT AMET IPSUM</p>
            <NavLink to="/">SHOP NOW</NavLink>
          </div>
        </div>
      </div>
      <div className={styles.product}>
        <div
          className={` ${styles.rightProductWrapper} ${
            innerWidth >= 820
              ? offsetTop >= 1300
                ? styles.productAnimation
                : styles.productAnimationReturn
              : offsetTop >= 1050
              ? styles.productAnimation
              : styles.productAnimationReturn
          }`}
        >
          <div
            style={
              innerWidth >= 700
                ? innerWidth <= 820
                  ? {
                      transform: `translateY(-${(offsetTop - 1050) / 8}px)`,
                      transition: "transform 1s",
                    }
                  : {
                      transform: `translateY(-${(offsetTop - 1100) / 4}px)`,
                      transition: "transform 1s",
                    }
                : {
                    transform: `translateY(-${(offsetTop - 1200) / 20}px)`,
                    transition: "transform 1s",
                  }
            }
          >
            <img src={product3} alt="product3" />
          </div>
          <div className={styles.productDesc}>
            <h2>Textile Experts</h2>
            <p>LOREM IPSUM DOLOR SIT AMET IPSUM</p>
            <NavLink to="/">SHOP NOW</NavLink>
          </div>
        </div>
        <div
          className={` ${styles.leftProductWrapper} ${
            offsetTop >= 1050
              ? styles.productAnimation
              : styles.productAnimationReturn
          }`}
        >
          <div
            style={
              innerWidth >= 700
                ? innerWidth <= 820
                  ? {
                      transform: `translateY(-${(offsetTop - 1050) / 8}px)`,
                      transition: "transform 1s",
                    }
                  : {
                      transform: `translateY(-${(offsetTop - 800) / 4}px)`,
                      transition: "transform 1s",
                    }
                : {
                    transform: `translateY(-${(offsetTop - 1100) / 30}px)`,
                    transition: "transform 1s",
                  }
            }
          >
            <img src={product4} alt="product4" />
          </div>
          <div className={styles.productDesc}>
            <h2>Textile Experts</h2>
            <p>LOREM IPSUM DOLOR SIT AMET IPSUM</p>
            <NavLink to="/">SHOP NOW</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
export default JasmineProducts;
