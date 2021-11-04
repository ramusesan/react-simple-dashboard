import React from "react";
import SideNav from "../dashboard/SideNav";
import { getUserData } from "../utils/user";
import "../../styles/header.css";

import { Redirect } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavMenu: false,
      logout: false,
      dashboard: false,
      userProfile: false,
      settings: false,
    };
  }

  onToggleNavMenu = () => {
    this.setState((prevState) => {
      return { showNavMenu: !prevState.showNavMenu };
    });
  };

  onLogout = () => {
    this.setState({ logout: true });
  };

  gotoDashboard = () => {
    this.setState({ dashboard: true });
  };

  gotoUserProfile = () => {
    this.setState({ userProfile: true });
  };

  gotoSettings = () => {
    this.setState({ settings: true });
  };

  render() {
    const { logout, userProfile, settings, dashboard } = this.state;

    const sessionUser = getUserData();
    console.log("sessionUser", sessionUser);
    if (logout) {
      return <Redirect to="/" />;
    }

    if (dashboard) {
      return <Redirect to="/dashboard" />;
    }
    if (userProfile) {
      return <Redirect to="/userprofile" />;
    }

    if (settings) {
      return <Redirect to="/settings" />;
    }
    return (
      <section>
        <div id="header-container">
          <span id="menu-icon" onClick={this.onToggleNavMenu}>
            {" "}
          </span>
          <span id="greet-user"> Welcome {sessionUser.userName || null } </span>
          <span id="logout-icon" onClick={this.onLogout}></span>
        </div>
        <SideNav
          showMenu={this.state.showNavMenu}
          gotoUserProfile={this.gotoUserProfile}
          gotoSettings={this.gotoSettings}
          gotoDashboard={this.gotoDashboard}
        />
      </section>
    );
  }
}
