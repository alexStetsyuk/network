import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.userDialog}>
        <div>
          <NavLink to="/dialogs/1" activeClassName={styles.active}>
            Sofiya
          </NavLink>
        </div>
        <div>
          <NavLink to="/dialogs/2" activeClassName={styles.active}>
            Masha
          </NavLink>
        </div>
        <div>
          <NavLink to="/dialogs/3" activeClassName={styles.active}>
            Andriy
          </NavLink>
        </div>
        <div>
          <NavLink to="/dialogs/4" activeClassName={styles.active}>
            Yarik
          </NavLink>
        </div>
      </div>
      <div className={styles.dialog}>
        <div>Hi</div>
        <div>How are you?</div>
        <div>How is it going?</div>
      </div>
    </div>
  );
};

export default Dialogs;
