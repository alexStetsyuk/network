import React from "react";
import Post from "./Post";

function Posts() {
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
          text="Hi, my name is John"
          ava="https://hellclan.co.uk/data/avatars/l/10/10486.jpg?1483145384"
        />
        <Post
          text="So John, are you a programmer?"
          ava="https://forum.truckersmp.com/uploads/monthly_2019_06/imported-photo-186659.thumb.jpeg.7ca80c40fa6e972e04cc2f14f5114d80.jpeg"
        />
        <Post
          text="Yes, like you i am learning React:)"
          ava="https://hellclan.co.uk/data/avatars/l/10/10486.jpg?1483145384"
        />
      </div>
    </div>
  );
}

export default Posts;
