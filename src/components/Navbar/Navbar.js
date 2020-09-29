import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <NavLink to="/profile" activeClassName={styles.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={styles.active}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" activeClassName={styles.active}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" activeClassName={styles.active}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="settings" activeClassName={styles.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
