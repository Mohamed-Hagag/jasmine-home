import React, { useRef, useState } from "react";
import { BiHeart } from "react-icons/bi";
import product1 from "../../../assets/images/product1.jpg";
import product2 from "../../../assets/images/product2.jpg";
import product3 from "../../../assets/images/product3.jpg";
import product4 from "../../../assets/images/product4.jpg";
import product5 from "../../../assets/images/product5.jpg";
import product6 from "../../../assets/images/product6.jpg";
import { NavLink } from "react-router-dom";

import styles from "./KitchenTowels.module.css";

const KitchenTowels = (props) => {
  const [path, setPath] = useState("product2");

  const firstImg = useRef();
  const secondImg = useRef();
  const thirdImg = useRef();
  const fourthImg = useRef();

  return (
    <div className={styles.featuredProductsContainer}>
      <div className={styles.featuredProduct}>
        <NavLink to={`/${path}`}>
          <div className={styles.imgContainer}>
            <img src={product2} alt="product2" ref={firstImg} />
            <button
              className={styles.addRemoveButton}
              onClick={(e) => {
                props.deleteProduct();
                e.preventDefault();
              }}
              disabled={props.productsCount === 0 ? true : false}
            >
              -
            </button>
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
                firstImg.current.src = product2;
                setPath("product2");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#775a5e" }}
              onMouseEnter={() => {
                firstImg.current.src = product1;
                setPath("product1");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#86c5cc" }}
              onMouseEnter={() => {
                firstImg.current.src = product3;
                setPath("product3");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#f7e9e8" }}
              onMouseEnter={() => {
                firstImg.current.src = product4;
                setPath("product4");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#eecfd4" }}
              onMouseEnter={() => {
                firstImg.current.src = product5;
                setPath("product5");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#b3aabd" }}
              onMouseEnter={() => {
                firstImg.current.src = product6;
                setPath("product6");
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
        </NavLink>{" "}
      </div>
      <div className={styles.featuredProduct}>
        <NavLink to={`/${path}`}>
          <div className={styles.imgContainer}>
            <img src={product2} alt="product2" ref={secondImg} />
            <button
              className={styles.addRemoveButton}
              onClick={(e) => {
                props.addProduct();
                e.preventDefault();
              }}
            >
              +
            </button>

            <div className={styles.promotion}>
              <span>Promotion</span>
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
                secondImg.current.src = product2;
                setPath("product2");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#775a5e" }}
              onMouseEnter={() => {
                secondImg.current.src = product1;
                setPath("product1");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#86c5cc" }}
              onMouseEnter={() => {
                secondImg.current.src = product3;
                setPath("product3");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#f7e9e8" }}
              onMouseEnter={() => {
                secondImg.current.src = product4;
                setPath("product4");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#eecfd4" }}
              onMouseEnter={() => {
                secondImg.current.src = product5;
                setPath("product5");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#b3aabd" }}
              onMouseEnter={() => {
                secondImg.current.src = product6;
                setPath("product6");
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
        </NavLink>
      </div>
      <div className={styles.featuredProduct}>
        <NavLink to={`/${path}`}>
          <div className={styles.imgContainer}>
            <img src={product2} alt="product2" ref={thirdImg} />
            <button
              className={styles.addRemoveButton}
              onClick={(e) => {
                props.addProduct();
                e.preventDefault();
              }}
            >
              +
            </button>
            <div className={styles.sale}>
              <span>-10%</span>
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
                thirdImg.current.src = product2;
                setPath("product2");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#775a5e" }}
              onMouseEnter={() => {
                thirdImg.current.src = product1;
                setPath("product1");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#86c5cc" }}
              onMouseEnter={() => {
                thirdImg.current.src = product3;
                setPath("product3");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#f7e9e8" }}
              onMouseEnter={() => {
                thirdImg.current.src = product4;
                setPath("product4");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#eecfd4" }}
              onMouseEnter={() => {
                thirdImg.current.src = product5;
                setPath("product5");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#b3aabd" }}
              onMouseEnter={() => {
                thirdImg.current.src = product6;
                setPath("product6");
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
        </NavLink>{" "}
      </div>
      <div className={styles.featuredProduct}>
        <NavLink to={`/${path}`}>
          <div className={styles.imgContainer}>
            <img src={product2} alt="product2" ref={fourthImg} />
            <button
              className={styles.addRemoveButton}
              onClick={(e) => {
                props.addProduct();
                e.preventDefault();
              }}
            >
              +
            </button>
            <div className={styles.promotion}>
              <span>Promotion</span>
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
                fourthImg.current.src = product2;
                setPath("product2");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#775a5e" }}
              onMouseEnter={() => {
                fourthImg.current.src = product1;
                setPath("product1");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#86c5cc" }}
              onMouseEnter={() => {
                fourthImg.current.src = product3;
                setPath("product3");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#f7e9e8" }}
              onMouseEnter={() => {
                fourthImg.current.src = product4;
                setPath("product4");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#eecfd4" }}
              onMouseEnter={() => {
                fourthImg.current.src = product5;
                setPath("product5");
              }}
            ></div>
            <div
              style={{ backgroundColor: "#b3aabd" }}
              onMouseEnter={() => {
                fourthImg.current.src = product6;
                setPath("product6");
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
        </NavLink>{" "}
      </div>
    </div>
  );
};
export default KitchenTowels;
