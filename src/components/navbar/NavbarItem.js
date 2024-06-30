import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavbarItem(props) {
  return (
    <NavLink
      to={`/${props.item}`}
      className={({ isActive }) => `nav-link ${isActive ? "active" : "pending"}`}
    >
      {props.item.charAt(0).toUpperCase() +
        props.item.substring(1, props.item.length)}
    </NavLink>
  );
}

NavbarItem.propTypes = {
  item: PropTypes.string.isRequired,
};
