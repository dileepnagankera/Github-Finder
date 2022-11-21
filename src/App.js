import React, { Component } from "react";
import "./App.css";
import { NavBar } from "./components/layout/navBar";
import Users from "./components/users/users";

class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4];

    return (
      <div className="App">
        <NavBar />
        <br />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
