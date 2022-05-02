import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import EditProfile from "./components/editprofile/EditProfile";
import MyBooks from "./components/mybooks/MyBooks";

import "./style.css";

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
    if(this.props.modal === "dashboard") {
      return (
        <div className="Layout" onLoad={this.getForms()}>
          <div className="user--panel">
            <div className="prof--picture"></div>
            <span className="username">{this.state.forms.fullname}</span>
            {/* <span className="username">{this.state.forms.username}</span> */}
          {/* <span className="username">{this.state.forms.email}</span> */}
            <div className="user--menu">
              <button className="activebtn" onClick={() => this.props.changeModal('dashboard')}>
                Dashboard
              </button>
              <button onClick={() => this.props.changeModal('editprofile')}>Edit Profile</button>
              <button onClick={() => this.props.changeModal('mybooks')}>My Books</button>
              <button onClick={() => this.props.changeState('athosPage')}>Athos teste</button>
              <button>Help</button>
              <button onClick={() => this.logout(this.props)}>Logout</button>
            </div>
          </div>
          <div className="main--panel">
            <Dashboard />
          </div>
        </div>
      );
    }

    if (this.props.modal === 'editprofile') {
      return (
        <div className="Layout" onLoad={this.getForms()}>
          <div className="user--panel">
            <div className="prof--picture"></div>
            <span className="username">{this.state.forms.fullname}</span>
            {/* <span className="username">{this.state.forms.username}</span> */}
          {/* <span className="username">{this.state.forms.email}</span> */}
            <div className="user--menu">
              <button className="activebtn" onClick={() => this.props.changeModal('dashboard')}>
                Dashboard
              </button>
              <button onClick={() => this.props.changeModal('editprofile')}>Edit Profile</button>
              <button onClick={() => this.props.changeModal('mybooks')}>My Books</button>
              <button onClick={() => this.props.changeState('athosPage')}>Athos teste</button>
              <button>Help</button>
              <button onClick={() => this.logout(this.props)}>Logout</button>
            </div>
          </div>
          <div className="main--panel">
            <EditProfile />
          </div>
        </div>
      );
    }

    if(this.props.modal === "mybooks") {
      return (
        <div className="Layout" onLoad={this.getForms()}>
          <div className="user--panel">
            <div className="prof--picture"></div>
            <span className="username">{this.state.forms.fullname}</span>
            {/* <span className="username">{this.state.forms.username}</span> */}
          {/* <span className="username">{this.state.forms.email}</span> */}
            <div className="user--menu">
              <button className="activebtn" onClick={() => this.props.changeModal('dashboard')}>
                Dashboard
              </button>
              <button onClick={() => this.props.changeModal('editprofile')}>Edit Profile</button>
              <button onClick={() => this.props.changeModal('mybooks')}>My Books</button>
              <button onClick={() => this.props.changeState('athosPage')}>Athos teste</button>
              <button>Help</button>
              <button onClick={() => this.logout(this.props)}>Logout</button>
            </div>
          </div>
          <div className="main--panel">
            <MyBooks />
          </div>
        </div>
      );
    }
  }
}


