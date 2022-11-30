import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-secondary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul className="home">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
NavBar.defaultProps = {
  title: "GitHub Finder",
  icon: "fa fa-github",
};
NavBar.PropType = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavBar;
