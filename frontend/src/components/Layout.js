import React from "react";

import Register from "./register/Register";
import Login from "./login/Login"
import App from "./athos/App.js"
import Main from "./mainPage/Main"

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = {currentPage: 'register'}
  }

  changeState(newState) {
    this.setState({ currentPage: newState })
  }

  render() {
    if(this.state.currentPage === 'register') {
        return <Register changeState={this.changeState} />
    }

    if(this.state.currentPage === 'login') {
        return <Login changeState={this.changeState} />
    }

    if(this.state.currentPage === 'landingPage') {
        return <Main changeState={this.changeState} />
    }

    if(this.state.currentPage === 'editProfile') {
        return <Login changeState={this.changeState} />
    }

    if(this.state.currentPage === 'athosPage') {
        return <App changeState={this.changeState} />
    }
  }
};
