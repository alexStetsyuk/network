import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="flex-wrap">
        <Navbar />
        <div className="content">
          {/* <Profile /> */}
          <Dialogs />
        </div>
      </div>
    </div>
  );
};

export default App;
