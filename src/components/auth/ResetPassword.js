import React, { Component } from "react";
import FormLayout from "../Layout/FormLayout";
import { Link, Redirect } from "react-router-dom";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emaild: "",
      errorMsg: "",
      sentResetCode: false,
    };
  }
  onChangeInput(type, e) {
    if (type === "email") {
      this.setState({ emaild: e.target.value });
    }
  }
  resetPassword = (event) => {
    event.preventDefault();
  };

  render() {
    const { emaild, errorMsg, sentResetCode } = this.state;
    return (
      <FormLayout formName="Reset Password" onSubmit={this.resetPassword}>
        <div>
          {" "}
          {!sentResetCode ? (
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={emaild}
              onChange={this.onChangeInput.bind(this, "email")}
            />
          ) : (
            <input
              type="text"
              name="resetcode"
              placeholder="Enter Reset Code"
              value={emaild}
              onChange={this.onChangeInput.bind(this, "email")}
            />
          )}
          <br />
        </div>
        <div>
          {sentResetCode ? (
            <input
              type="submit"
              className="auth-button"
              style={{ margin: "auto", left: "18px", top: "5px" }}
              value="Reset Password"
            />
          ) : (
            <input
              type="submit"
              className="auth-button"
              style={{ margin: "auto", left: "18px", top: "5px" }}
              value="  Send Reset Code"
            />
          )}
        </div>

        <div style={{ fontSize: "12px", marginTop: "10px", marginLeft: "5px" }}>
          Goto login page <Link to="/">Log In</Link>
        </div>
      </FormLayout>
    );
  }
}

export default ResetPassword;
