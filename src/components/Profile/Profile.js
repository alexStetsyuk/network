import React from "react";
import Banner from "./Banner/Banner";
import Posts from "./Posts/Posts";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.content}>
      <Banner />
      Ava+description
      <Posts />
    </div>
  );
};

export default Profile;
