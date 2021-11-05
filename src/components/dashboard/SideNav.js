import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { getUserData } from "../utils/user";

export default class SidebarExample extends React.Component {
  render() {
    const { showMenu } = this.props;
    const containerClass = showMenu ? "show-nav-menu" : "hide-nav-menu";
    const USER = getUserData();

    const backDropClass = showMenu ? "nav-menu__backdrop" : "";
    return (
      <Router>
        <div id="nav-container" className={containerClass}>
          <div
            className={backDropClass}
            onClick={this.props.closeNavMenu}
          ></div>
          <ul id="nav-links" style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/dashboard" onClick={this.props.gotoDashboard}>
                Home
              </Link>
            </li>
            {USER.role === "admin" ? (
              <li>
                <Link to="/settings" onClick={this.props.gotoSettings}>
                  Settings
                </Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <Link to="/userprofile" onClick={this.props.gotoUserProfile}>
                Profile
              </Link>
            </li>
          </ul>
          <hr />
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li onClick={this.props.onLogout} style={{cursor: "pointer"}} >Logout</li>
          </ul>
        </div>
      </Router>
    );
  }
}
