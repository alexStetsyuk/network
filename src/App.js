import React from "react"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img
          src="https://webstockreview.net/images/twitter-logo-png-4.png"
          alt="logo"
        />
      </header>
      <nav>
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
      </nav>
      <div>
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
  );
}

export default App;
