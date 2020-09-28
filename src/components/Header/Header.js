import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://webstockreview.net/images/twitter-logo-png-4.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
