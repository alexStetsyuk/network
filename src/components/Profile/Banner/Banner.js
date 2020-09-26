import React from "react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
        alt="banner"
        className={styles.banner}
      />
    </div>
  );
}

export default Banner;
