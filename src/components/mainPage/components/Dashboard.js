import React from "react";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1 className="dash--title">Dashboard</h1>
        <span className="dash--subtitle" onClick={this.props.changeState('booklist')} >Books</span>
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

        {/**add by gabriel */}
        {/* <button onClick={this.props.changeState('booklist')}>Book List</button> */}
        {/*  */}
      </div>
    );
  }
}
