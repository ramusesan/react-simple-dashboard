import React, { Component } from "react";
import FormLayout from "../Layout/FormLayout";
import { Link } from "react-router-dom";
import PopUp from "../common/PopUp";
import "../../styles/resetCode.css";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      resetCode: "",
      errorMsg: "",
      sentResetCode: false,
      popUpMsg: "",
      showPopUpModel: false,
    };
  }
  onChangeInput(type, e) {
    if (type === "email") {
      const enteredEmail = e.target.value.trim().toLowerCase();
      this.setState({ emailId: enteredEmail });
    } else if (type === "resetCode") {
      const enteredCode = e.target.value.trim().toLowerCase();
      this.setState({ resetCode: enteredCode });
    }
    if (
      this.state.errorMsg !== "" &&
      this.state.errorMsg !== undefined &&
      this.state.errorMsg !== null
    ) {
      this.setState({ resetCode: "" });
    }
  }
  resetPassword = (event) => {
    event.preventDefault();
    const enteredEmail = this.state.emailId;
    const resetCode = this.state.resetCode;

    if (
      !this.state.sentResetCode &&
      (enteredEmail === undefined || enteredEmail === "")
    ) {
      this.setState({ errorMsg: "Please enter your email id" });
      return;
    } else if (!this.state.sentResetCode && enteredEmail !== "") {
      this.openPopUpModel();
    } else if (
      this.state.sentResetCode &&
      (resetCode === undefined || resetCode === "")
    ) {
      this.setState({ errorMsg: "Please Enter valid code" });
    } else if (this.state.sentResetCode && resetCode !== "") {
      this.setState({
        showPopUpModel: true,
        popUpMsg: "Development is under Progress",
      });
    }
  };

  openPopUpModel = () => {
    this.setState({
      popUpMsg: "Sent code Successfully, please check your email inbox",
      showPopUpModel: true,
    });
  };

  closePopUpModel = () => {
    this.setState({ popUpMsg: "", showPopUpModel: false });
    if (this.state.sentResetCode) {
      this.setState({ sentResetCode: false });
    } else {
      this.setState({ sentResetCode: true });
    }
  };

  render() {
    const {
      emailId,
      resetCode,
      errorMsg,
      popUpMsg,
      showPopUpModel,
      sentResetCode,
    } = this.state;
    return (
      <FormLayout formName="Reset Password" onSubmit={this.resetPassword}>
        <div id="reset-code__container">
          {showPopUpModel ? (
            <PopUp msg={popUpMsg} closeModel={this.closePopUpModel} />
          ) : null}
        </div>

        <div>
          {!sentResetCode ? (
            <input
              type="email"
              name="email"
              placeholder="Enter your email id"
              value={emailId}
              onChange={this.onChangeInput.bind(this, "email")}
            />
          ) : (
            <input
              type="text"
              name="resetcode"
              placeholder="Enter Reset Code"
              value={resetCode}
              onChange={this.onChangeInput.bind(this, "resetCode")}
            />
          )}
          <br />
          <p className="auth-error-msg">{errorMsg}</p>
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

        <div style={{ fontSize: "14px", marginTop: "10px", marginLeft: "5px" }}>
          Goto login page <Link to="/">Log In</Link>
        </div>
      </FormLayout>
    );
  }
}

export default ResetPassword;
