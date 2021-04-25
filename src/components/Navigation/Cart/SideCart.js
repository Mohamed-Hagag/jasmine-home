import React from "react";
import styles from "./SideCart.module.css";
import product1 from "../../../assets/images/product3.jpg";
import product2 from "../../../assets/images/product2.jpg";
import product3 from "../../../assets/images/product1.jpg";
import { FaTrashAlt } from "react-icons/fa";

const SideCart = (props) => (
  <div
    className={`${styles.sideCart} ${
      props.showCart ? styles.open : styles.close
    }`}
  >
    <div className={styles.closeSideCart} onClick={props.closeSideCart}>
      Close
    </div>
    <div className={styles.sideCartBody}>
      <div className={styles.title}>
        <h3>Shopping Cart</h3>
      </div>
      <div className={styles.cartItems}>
        <div className={styles.cartItem}>
          <div className={styles.productImg}>
            <img src={product1} alt="product" />
          </div>
          <div className={styles.productDesc}>
            <h3 className={styles.productTitle}>
              Product Jasmine{" "}
              <span style={{ paddingLeft: "80px" }}>
                {" "}
                <FaTrashAlt />
              </span>
            </h3>
            <p className={styles.quantity}>Quantity: 01</p>
            <p className={styles.price}>$24.00</p>
          </div>
        </div>
        <div className={styles.cartItem}>
          <div className={styles.productImg}>
            <img src={product2} alt="product" />
          </div>
          <div className={styles.productDesc}>
            <h3 className={styles.productTitle}>
              Product Jasmine{" "}
              <span style={{ paddingLeft: "80px" }}>
                {" "}
                <FaTrashAlt />
              </span>
            </h3>
            <p className={styles.quantity}>Quantity: 01</p>
            <p className={styles.price}>$24.00</p>
          </div>
        </div>
        <div className={styles.cartItem}>
          <div className={styles.productImg}>
            <img src={product3} alt="product" />
          </div>
          <div className={styles.productDesc}>
            <h3 className={styles.productTitle}>
              Product Jasmine
              <span style={{ paddingLeft: "80px" }}>
                {" "}
                <FaTrashAlt />
              </span>
            </h3>
            <p className={styles.quantity}>Quantity: 01</p>
            <p className={styles.price}>$24.00</p>
          </div>
        </div>
      </div>
      <div className={styles.totalPrice}>
        <p style={{ fontWeight: "500" }}>SUB TOTAL</p>
        <h3 style={{ color: "#ceae6d" }}>$48.00</h3>
      </div>
      <div className={styles.purchaseButtons}>
        <button>VIEW CART</button>
        <button>CHECKOUT</button>
      </div>
    </div>
  </div>
);

export default SideCart;
