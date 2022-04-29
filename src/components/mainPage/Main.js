import React from "react";
import MainLayout from "./MainLayout";

import "./style.css";

export default class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="Layout">
        <div className="user--panel">
          <div className="prof--picture"></div>
          <span className="username">Pedro Silva</span>
          <div className="user--menu">
            <button className="activebtn" onClick="">
              Dashboard
            </button>
            <button>Edit Profile</button>
            <button>Social</button>
            <button>Help</button>
            <button>Logout</button>
          </div>
        </div>
        <div className="dash--panel">
          <MainLayout />
        </div>
      </div>
    );
  }
}
