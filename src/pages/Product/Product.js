import React, { useEffect, useRef } from "react";
import { BiHeart } from "react-icons/bi";
import styles from "./Product.module.css";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import product5 from "../../assets/images/product5.jpg";
import product6 from "../../assets/images/product6.jpg";
import product7 from "../../assets/images/product7.jpg";

const Product = (props) => {
  const imgObject = {
    product1: product1,
    product2: product2,
    product3: product3,
    product4: product4,
    product5: product5,
    product6: product6,
    product7: product7,
  };
  const firstImg = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getImg = () => {
    for (const img in imgObject) {
      return imgObject[props.match.params.product];
    }
  };
  return (
    <div className={styles.featuredProductsContainer}>
      <div className={styles.featuredProduct}>
        <div className={styles.imgContainer}>
          <img src={getImg()} alt="product" ref={firstImg} />
          <div className={styles.sale}>
            <span>Sale</span>
          </div>
        </div>
        <div className={styles.titlePrice}>
          <h6>Jasmine Towel</h6>
          <p>590$</p>
        </div>
        <div className={styles.colors}>
          <div
            style={{ backgroundColor: "#f4f1de" }}
            onMouseEnter={() => {
              firstImg.current.src = product1;
            }}
          ></div>
          <div
            style={{ backgroundColor: "#775a5e" }}
            onMouseEnter={() => {
              firstImg.current.src = product2;
            }}
          ></div>
          <div
            style={{ backgroundColor: "#86c5cc" }}
            onMouseEnter={() => {
              firstImg.current.src = product3;
            }}
          ></div>
          <div
            style={{ backgroundColor: "#f7e9e8" }}
            onMouseEnter={() => {
              firstImg.current.src = product4;
            }}
          ></div>
          <div
            style={{ backgroundColor: "#eecfd4" }}
            onMouseEnter={() => {
              firstImg.current.src = product5;
            }}
          ></div>
          <div
            style={{ backgroundColor: "#b3aabd" }}
            onMouseEnter={() => {
              firstImg.current.src = product6;
            }}
          ></div>
        </div>
        <p style={{ color: "#4c4c4c" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className={styles.purchase}>
          <button
            onClick={(e) => {
              props.addProduct();
              e.preventDefault();
            }}
          >
            + ADD TO CART
          </button>
          <BiHeart />
        </div>
      </div>
    </div>
  );
};

export default Product;
