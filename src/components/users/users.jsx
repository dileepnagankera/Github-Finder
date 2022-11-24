import React from "react";
import UserItem from "./userItem";
import Spinner from "../layout/spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4">
            <br />
            <UserItem key={user.id} user={user} />
          </div>
        ))}
      </div>
    );
  }
};

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
