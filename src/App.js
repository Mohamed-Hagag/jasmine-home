import React, { Fragment, useState, useEffect } from "react";
import styles from "./App.module.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Layout from "./components/Layout/Layout";
import Slider from "./components/Slider/Slider";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Newsletter from "./components/Newsletter/Newsletter";
import JasmineProducts from "./components/JasmineProducts/JasmineProducts";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import { Route, Switch } from "react-router-dom";
import Product from "./pages/Product/Product";
import Spinner from "./components/UI/Spinner/Spinner";

export const App = () => {
  const [cartCount, setCartCount] = useState(3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  const incrementCartCount = () => {
    setCartCount((prevCartCount) => prevCartCount + 1);
  };

  const decrementCartCount = () => {
    setCartCount((prevCartCount) => prevCartCount - 1);
  };
  return loading ? (
    <Spinner />
  ) : (
    <Layout productsCount={cartCount}>
      <div className={styles.preLoadImages}></div>
      <Switch>
        <Route
          path="/:product"
          render={(props) => (
            <Product {...props} addProduct={incrementCartCount} />
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <HomePage
              {...props}
              productsCount={cartCount}
              addProduct={incrementCartCount}
              deleteProduct={decrementCartCount}
            />
          )}
        />
      </Switch>
    </Layout>
  );
};

const HomePage = (props) => (
  <Fragment>
    {" "}
    <Slider />
    <AboutUs />
    <JasmineProducts />
    <FeaturedProducts
      addProduct={props.addProduct}
      deleteProduct={props.deleteProduct}
      productsCount={props.productsCount}
    />
    <ContactInfo />
    <Newsletter />
  </Fragment>
);
