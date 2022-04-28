import React from "react";

import './style.css';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Layout">
        <div className="user--panel">
          <div className="prof--picture"></div>
          <span className="username">Pedro Silva</span>
          <div className="user--menu">
            <button className="activebtn">Dashboard</button>
            <button>Edit Profile</button>
            <button>Social</button>
            <button>Help</button>
            <button >Logout</button>
          </div>
        </div>
        <div className='dash--panel'>
          <h1 className='dash--title'>
            Dashboard
          </h1>
          <span className='dash--subtitle'>Books</span>
          <ul className="activity--ul">
            <ul>
              <div className="ul--header">Recent activity</div>
              <li>Harry Potter - Added</li>
              <li>Hunger Games - Removed</li>
            </ul>
            <ul>
              <div className="ul--header">Overview</div>
              <li>Books read: 666</li>
              <li>Books to read: 0</li>
              <li>Last book read: The Holy Bible</li>
            </ul>
          </ul>
          <ul className="activity--ul">
            <ul>
              <div className="ul--header">My reviews</div>
              <li>The Catcher in the Rye</li>
              <li>The Odyssey</li>
              <li>O Cortiço</li>
            </ul>
            <ul>
              <div className="ul--header">Overview</div>
              <li>Books read: 666</li>
              <li>Books to read: 0</li>
              <li>Last book read: The Holy Bible</li>
            </ul>
          </ul>
        </div>
      </div>
    );
  }
};
