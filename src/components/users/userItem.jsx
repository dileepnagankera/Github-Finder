import React from "react";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center ">
      <br />
      <img
        src={avatar_url}
        alt=""
        className="rounded-circle center"
        height={50}
        width={100}
        style={{ alignSelf: "center" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
