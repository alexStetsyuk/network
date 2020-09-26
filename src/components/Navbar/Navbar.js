import React from "react";
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </nav>
  );
}

export default Navbar;
