import { NavLink } from "react-router-dom";
import React from "react";

const UrlLink = (props) => {
    const {link, linkName, ...otherProps} = props
  return (
    <li className="nav-item active">
      <NavLink className="nav-link" to={link} {...otherProps}>{linkName}<span className="sr-only">(current)</span>
      </NavLink>
    </li>)
};

export default UrlLink;
