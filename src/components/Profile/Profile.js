import React from "react";

function Profile() {
  return (
    <div className="content">
      <div>
        <img
          src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
          alt="banner"
          className="banner"
        />
      </div>
      Ava+description
      <div>
        Posts
        <div>
          My posts
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
