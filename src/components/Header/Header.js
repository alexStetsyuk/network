import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://webstockreview.net/images/twitter-logo-png-4.png"
        alt="logo"
      />
    </header>
  );
}

export default Header;
