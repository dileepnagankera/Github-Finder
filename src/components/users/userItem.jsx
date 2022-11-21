import React, { Component } from "react";

class userItem extends Component {
  state = {};

  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center ">
        <br />
        <img
          src={avatar_url}
          alt=""
          className="rounded-circle"
          style={{ width: "200px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default userItem;
