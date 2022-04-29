import React from "react";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile";

// add by gabriel
import BookList from './components/BookList';
//

// (gabriel) tendo problemas para iniciar a pagina em dashboard, 
// para depois poder ir para editar perfil e lista de livros

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = { currentPage: "dashboard" };
  }

  changeState(newState) {
    this.setState({ currentPage: newState });
  }

  render() {
    if (this.state.currentPage == "dashboard") {
      return <Dashboard changeState={this.changeState} />;
    }

    if (this.state.currentPage == "editprofile") {
      return <EditProfile changeState={this.changeState} />;
    }

    // add by gabriel
    if(this.state.currentPage == "booklist") {
      return <BookList changeState={this.changeState} />;
    }
    //
  }
}
