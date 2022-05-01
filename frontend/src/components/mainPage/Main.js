import React from "react";

import './style.css';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
        this.state = {      
            forms: []//você pode inicializar state com dados manualmente ou com um array vazio caso os dados sejam carregados via API
        };
    
  }

  async getForms() {
    const response = await fetch("http://localhost:9000/getForms", { credentials: 'include' });
    const data = await response.json();
    const userData = data[0]
    this.state = {
      fullname: userData.fullname,
      username: userData.username,
      email: userData.email,
    }
    console.log(userData)
    console.log(`O state é ${this.state}`)
            this.setState(state => ({
                forms: userData
            }));
  }

  logout(props) {
    fetch('http://localhost:9000/logout', { credentials: 'include' })
      .then(response => response.json())
      .then(data => console.log(data))
    props.changeState('login')
  }

  render() {
    return (
      <div className="Layout" onLoad={this.getForms()}>
        <div className="user--panel">
          <div className="prof--picture"></div>
          <span className="username">{this.state.forms.fullname}</span>
          <span className="username">{this.state.forms.username}</span>
          <span className="username">{this.state.forms.email}</span>
          <div className="user--menu">
            <button className="activebtn">Dashboard</button>
            <button onClick={() => this.props.changeState('athosPage')}>Edit Profile</button>
            <button>Social</button>
            <button>Help</button>
            <button onClick={() => this.logout(this.props)}>Logout</button>
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
