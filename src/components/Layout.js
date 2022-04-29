import React from "react";

import Register from "./register/Register";
import Login from "./login/Login";
import Main from "./mainPage/Main";

// (gabriel)
// EXCLUIR
// add by gabriel
// import BookList from '../components/BookList';

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
    if(this.state.currentPage == 'register') {
        return <Register changeState={this.changeState} />
    }

    if(this.state.currentPage == 'login') {
        return <Login changeState={this.changeState} />
    }

    if(this.state.currentPage == 'mainPage') {
        return <Main changeState={this.changeState} />
    }

    // (gabriel) tem dois <Login /> acho que deveria ser <EditProfile />
    if(this.state.currentPage == 'editProfile') {
        return <Login changeState={this.changeState} />
    }

    // (gabriel) acredito que quando eu criar o componente <BookList /> deve surgir esse novo "if".
    // if(this.state.currentPage == 'booklist') {
    //   return <BookList changeState={this.changeState} />
    // }
  }
};
