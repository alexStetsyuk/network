import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.userDialog}>
        <div className={styles.active}>Sofiya</div>
        <div>Masha</div>
        <div>Andriy</div>
        <div>Yarik</div>
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
