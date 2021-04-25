import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  return (
    <div
      className={`${styles.sideDrawer} ${
        props.show ? styles.open : styles.close
      }`}
    >
      <div className={styles.header}>
        <div className={styles.closeIcon} onClick={props.closeClicked}>
          <AiOutlineClose />
        </div>
        <div className={styles.title}>Menu</div>
      </div>
      <div className={styles.icons}>
        <div>
          <BiIcons.BiUser />
          <br />
          <span>ACCOUNT</span>
        </div>
        <div>
          <BiIcons.BiHeart />

          <br />
          <span>WISHLIST</span>
        </div>
        <div className={styles.cartIcon}>
          <BiIcons.BiShoppingBag />
          <button>{props.productsCount}</button>
          <br />
          <span>CART</span>
        </div>
      </div>
      <NavigationItems
        showSideDrawer={props.show}
        sideDrawerStyle={styles.sideDrawerShowed}
        homeItem={styles.home}
      />
    </div>
  );
};

export default SideDrawer;
