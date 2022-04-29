import React from "react";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile";

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
  }
}
