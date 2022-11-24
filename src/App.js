import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/navBar";
import Users from "./components/users/users";
import Search from "./components/users/search";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  //Seach GitHub users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
