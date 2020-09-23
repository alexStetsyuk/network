import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img
          src="https://webstockreview.net/images/twitter-logo-png-4.png"
          alt="logo"
        />
      </header>
      <div className="flex-wrap">
        <nav className="navbar">
          <div>Profile</div>
          <div>Messages</div>
          <div>News</div>
          <div>Music</div>
          <div>Settings</div>
        </nav>
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
      </div>
    </div>
  );
}

export default App;
