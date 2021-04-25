import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import styles from "./NavigationItems.module.css";

const NavigationItems = (props) => {
  const [searchInp, setSearchInp] = useState("");

  const searchInputChangeHandler = (e) => {
    setSearchInp(e.target.value);
  };

  return (
    <nav className={styles.navItems}>
      <ul className={props.sideDrawerStyle}>
        <NavLink activeClassName={styles.active} to="/">
          <li className={`${styles.home} ${props.homeItem}`}>Home</li>
        </NavLink>
        <NavLink to="/">
          <li>About Us</li>
        </NavLink>
        <NavLink to="/">
          {" "}
          <li>Products</li>
        </NavLink>
        <NavLink to="/">
          {" "}
          <li>Contact Us</li>
        </NavLink>
        <li className={styles.searchInput}>
          <HiOutlineSearch />
          <input
            type="text"
            placeholder="Enter your keyword"
            value={searchInp}
            onChange={searchInputChangeHandler}
          />
          {searchInp && (
            <IoIosClose
              className={styles.emptyInput}
              onClick={() => setSearchInp("")}
            />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationItems;
