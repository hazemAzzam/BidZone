import React from "react";

import "./static/css/navbar-style.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <h1>BidZone</h1>
          <ul>
            <li>
              <NavLink
                to="/login"
                activeClassName="active-link"
                className="nav-link"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                activeClassName="active-link"
                className="nav-link"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
