import React, { useState } from "react";
import BedSheets from "./BedSheets/BedSheets";
import styles from "./FeaturedProducts.module.css";
import KitchenTowels from "./KitchenTowels/KitchenTowels";
import Towels from "./Towels/Towels";

const FeaturedProducts = (props) => {
  const [view, setView] = useState("Towels");
  return (
    <section className={styles.featuredProductsSection}>
      <div className={styles.featuredHeader}>
        <div className={styles.featuredTitle}>
          <p>Featured Products</p>
          <div className={styles.underLine}></div>
        </div>
        <div className={styles.categoriesList}>
          <ul>
            <li
              style={
                view === "Towels" ? { color: "#ceae6d" } : { color: "#103426" }
              }
              onClick={() => setView("Towels")}
            >
              Towels
            </li>
            <li
              onClick={() => {
                setView("KitchenTowels");
              }}
              style={
                view === "KitchenTowels"
                  ? { color: "#ceae6d" }
                  : { color: "#103426" }
              }
            >
              Kitchen Towels
            </li>
            <li
              onClick={() => setView("BedSheets")}
              style={
                view === "BedSheets"
                  ? { color: "#ceae6d" }
                  : { color: "#103426" }
              }
            >
              Bed Sheets
            </li>
          </ul>
        </div>
      </div>
      {view === "Towels" && (
        <Towels
          addProduct={props.addProduct}
          deleteProduct={props.deleteProduct}
          productsCount={props.productsCount}
        />
      )}
      {view === "KitchenTowels" && (
        <KitchenTowels
          addProduct={props.addProduct}
          deleteProduct={props.deleteProduct}
          productsCount={props.productsCount}
        />
      )}
      {view === "BedSheets" && (
        <BedSheets
          addProduct={props.addProduct}
          deleteProduct={props.deleteProduct}
          productsCount={props.productsCount}
        />
      )}
    </section>
  );
};

export default FeaturedProducts;
