import React from "react";
import Header from "../common/Header";
import "../../styles/profile.css";
import { getUserData } from "../utils/user";

export default function Profile() {
  const USER = getUserData();
  return (
    <div>
      <Header />
      <section id="user-profile-main">
        <div id="user-profile-container">
          <div id="user-avator-section">
            <div id="user-avatar" />
          </div>
          <div id="user-details">
            <div id="details">
              <label>
                {" "}
                <b>User Name : </b>
                {USER.userName}
              </label>{" "}
              <br />
              <label>
                {" "}
                <b>Email Id :</b> {USER.email}
              </label>{" "}
              <br />
              <label>
                <b> Your Role: </b>
                {USER.role}
              </label>{" "}
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
