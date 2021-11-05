import React from "react";
import { Redirect } from "react-router-dom";
import SideNav from "../dashboard/SideNav";
import { getUserData } from "../utils/user";
import "../../styles/header.css";
import { isSessionExist, removeUserSession } from "../utils/user";

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

  componentDidMount() {
    if (!isSessionExist()) {
      this.onLogout();
    }
  }
  onToggleNavMenu = () => {
    this.setState((prevState) => {
      return { showNavMenu: !prevState.showNavMenu };
    });
  };

  closeNavMenu = () => {
    if (this.state.showNavMenu) {
      this.setState((prevState) => {
        return { showNavMenu: false };
      });
    }
  };

  onLogout = () => {
    removeUserSession();
    this.setState({ logout: true });
  };

  gotoDashboard = () => {
    const currntUrl = window.location.pathname;
    if (currntUrl === "/dashboard") {
      return;
    }
    this.setState({ dashboard: true });
  };

  gotoUserProfile = () => {
    const currntUrl = window.location.pathname;
    if (currntUrl === "/userprofile") {
      return;
    }
    this.setState({ userProfile: true });
  };

  gotoSettings = () => {
    const currntUrl = window.location.pathname;
    if (currntUrl === "/settings") {
      return;
    }
    this.setState({ settings: true });
  };

  render() {
    const { logout, userProfile, settings, dashboard } = this.state;

    const sessionUser = getUserData();

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
          <span id="greet-user"> Welcome {sessionUser.userName || null} </span>
          <span id="logout-icon" onClick={this.onLogout}></span>
        </div>
        <SideNav
          showMenu={this.state.showNavMenu}
          gotoUserProfile={this.gotoUserProfile}
          gotoSettings={this.gotoSettings}
          gotoDashboard={this.gotoDashboard}
          closeNavMenu={this.closeNavMenu}
          onLogout={this.onLogout}
        />
      </section>
    );
  }
}
