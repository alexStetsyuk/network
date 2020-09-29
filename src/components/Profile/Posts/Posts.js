import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div>
      Posts
      <div>
        My posts
        <Post
          text="Hello, my name is Alex"
          ava="https://forum.truckersmp.com/uploads/monthly_2019_06/imported-photo-186659.thumb.jpeg.7ca80c40fa6e972e04cc2f14f5114d80.jpeg"
        />
        <Post
          text="And I am learning React:)"
          ava="https://forum.truckersmp.com/uploads/monthly_2019_06/imported-photo-186659.thumb.jpeg.7ca80c40fa6e972e04cc2f14f5114d80.jpeg"
        />
      </div>
    </div>
  );
};

export default Posts;
