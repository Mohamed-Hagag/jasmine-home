import React, { useEffect, useRef, useState } from "react";
import * as BiIcons from "react-icons/bi";
import styles from "./CartIcons.module.css";

const CartIcons = (props) => {
  const [countChanged, setCountChanged] = useState();
  useEffect(() => {
    setCountChanged(props.productsCount);
  }, [props.productsCount]);
  return (
    <div className={styles.icons}>
      <BiIcons.BiUser />
      <BiIcons.BiHeart />
      <div className={styles.cartIcon} onClick={props.showSideCart}>
        <BiIcons.BiShoppingBag />
        <button
          className={
            countChanged === props.productsCount ? styles.changed : null
          }
        >
          {props.productsCount}
        </button>
      </div>
    </div>
  );
};
export default CartIcons;
