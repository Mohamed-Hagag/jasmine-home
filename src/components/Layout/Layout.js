import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaChevronCircleUp } from "react-icons/fa";
import Navigation from "../Navigation/Navigation";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import SideCart from "../Navigation/Cart/SideCart";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

const Layout = (props) => {
  const [backdrop, setBackdrop] = useState(false);
  const [sideDrawer, setSideDrawer] = useState(false);
  const [sideCart, setSideCart] = useState(false);
  const [btnUp, setBtnUp] = useState(false);
  const showSideDrawer = () => {
    setBackdrop(true);
    setSideDrawer(true);
  };

  const showSideCart = () => {
    setSideCart(true);
    setBackdrop(true);
  };
  const closeSideCart = () => {
    setSideCart(false);
    setBackdrop(false);
  };
  const closeBackdrop = () => {
    setBackdrop(false);
    setSideDrawer(false);
    setSideCart(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 400) {
        setBtnUp(true);
      } else {
        setBtnUp(false);
      }
    });
  });

  return (
    <Fragment>
      {btnUp && (
        <FaChevronCircleUp
          className={styles.btnUp}
          onClick={() => {
            window.window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        />
      )}
      <Navigation
        backdrop={backdrop}
        showSideDrawer={showSideDrawer}
        closeBackdrop={closeBackdrop}
        sideDrawer={sideDrawer}
        sideCart={sideCart}
        showSideCart={showSideCart}
        productsCount={props.productsCount}
      />
      {ReactDOM.createPortal(
        <SideDrawer
          show={sideDrawer}
          closeClicked={closeBackdrop}
          productsCount={props.productsCount}
        />,
        document.getElementById("sideDrawer-root")
      )}
      {ReactDOM.createPortal(
        <SideCart showCart={sideCart} closeSideCart={closeSideCart} />,
        document.getElementById("sideCart-root")
      )}
      <main className={styles.content}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
