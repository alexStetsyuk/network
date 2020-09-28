import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      {/* <img
        src="https://forum.truckersmp.com/uploads/monthly_2019_06/imported-photo-186659.thumb.jpeg.7ca80c40fa6e972e04cc2f14f5114d80.jpeg"
        alt="avatar"
        className={styles.avatar}
      /> */}
      <img src={props.ava} alt="ava" className={styles.avatar} />
      <span className={styles.comment}>{props.text}</span>
    </div>
  );
};

export default Post;
