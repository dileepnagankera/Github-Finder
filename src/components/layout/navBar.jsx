import React from "react";
import PropTypes from "prop-types";

const NavBar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h5>
        <i className={icon} />

        {title}
      </h5>
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
