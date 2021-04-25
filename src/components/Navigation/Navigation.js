import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../UI/Backdrop/Backdrop";
import CartIcons from "./Cart/CartIcons/CartIcons";
import Logo from "./Logo/Logo";
import styles from "./Navigation.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import SideToggle from "./SideToggle/SideToggle";

const Navigation = (props) => {
  const [scrolled, setScrolled] = useState();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  useEffect(() => {
    if (window.pageYOffset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  return (
    <div className={scrolled ? styles.navigationFixed : styles.navigation}>
      <Logo />
      <nav className={styles.navItems}>
        <NavigationItems showSideDrawer={props.sideDrawer} />
      </nav>
      <CartIcons
        showSideCart={props.showSideCart}
        productsCount={props.productsCount}
      />
      <SideToggle clicked={props.showSideDrawer} scrolled={scrolled} />
      {ReactDOM.createPortal(
        <Backdrop show={props.backdrop} clicked={props.closeBackdrop} />,
        document.getElementById("backdrop-root")
      )}
    </div>
  );
};

export default Navigation;
