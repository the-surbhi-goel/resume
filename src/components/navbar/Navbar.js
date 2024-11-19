import React from "react";
import NAV_CATEGORY from "../../constants/NavCategory";
import NavbarItem from "../common/NavbarItem";
import PropTypes from "prop-types";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg navbar-${props.theme.mode} bg-${props.theme.mode}`}
    >
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">
          Surbhi Goel
        </a> */}
        <NavLink to="/personal-info" className="navbar-brand">
          Surbhi Goel
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left Navbar */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {NAV_CATEGORY.map((category) => {
              return (
                <li key={category} className="nav-item">
                  <NavbarItem item={category} />
                </li>
              );
            })}
          </ul>

          {/* Right Navbar */}
          <div className="d-flex justify-content-between right-navbar">
            <div className="pe-1">🌞</div>
            <div className={`form-check form-switch text-${props.theme.text}`}>
              <input
                className={`form-check-input form-check-input-${props.theme.button}`}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.changeTheme}
              />
            </div>
            <div>🌙</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  theme: PropTypes.object,
};
