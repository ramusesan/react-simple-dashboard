import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import FormLayout from "../Layout/FormLayout";
import PopUp from "../common/PopUp";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      emailId: "",
      password: "",
      confirmPassword: "",
      errorMsg: "",
      signupSuccess: false,
      popUpMsg: "",
      showPopupModel: false,
    };
  }

  onChangeInput(type, event) {
    const value = event.target.value.trim().toLowerCase();
    if (type === "username") {
      this.setState({ userName: value });
    } else if (type === "email") {
      this.setState({ emailId: value });
    } else if (type === "password") {
      this.setState({ password: value });
    } else if (type === "confirmPassword") {
      this.setState({ confirmPassword: value });
    }

    if (this.state.errorMsg !== "") {
      this.setState({ errorMsg: "" });
    }
  }

  onSignUp = (event) => {
    event.preventDefault();
    if (this.state.userName === "") {
      this.setState({ errorMsg: "Please enter username" });
    } else if (this.state.emailId === "") {
      this.setState({ errorMsg: "Please enter email Id" });
    } else if (this.state.password !== "" && this.state.password.length < 8) {
      this.setState({
        errorMsg: "Your password must be atleast minimum 8 characters",
      });
    } else if (
      this.state.password === "" ||
      this.state.confirmPassword === ""
    ) {
      this.setState({
        errorMsg: "Please enter both password and confirm password",
      });
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({ errorMsg: "Password Not matching" });
    } else {
      this.checkUserExistInDb();
    }
  };

  checkUserExistInDb = () => {
    let userList = JSON.parse(localStorage.getItem("users"));
    let userInDb = [];
    userList.forEach((user, index) => {
      if (user.userName === this.state.userName) {
        this.setState({ errorMsg: "This user name is already registered" });
        userInDb.push(user);
      } else if (user.emailId === this.state.emailId) {
        this.setState({ errorMsg: "This emaild id  is registered." });
        userInDb.push(user);
      }
    });
    if (userInDb.length === 0) {
      userList.push({
        email: this.state.emailId,
        password: this.state.password,
        role: "user",
        userName: this.state.userName,
      });
      localStorage.setItem("users", JSON.stringify(userList));

      this.toggleModel(true);
    }
  };

  toggleModel = (redirect = false) => {
    this.setState((prevState) => {
      return {
        popUpMsg: "Account created successfully",
        showPopupModel: !prevState.showPopupModel,
      };
    });
  };

  clodeModel = () => {
    this.setState({
      signupSuccess: true,
    });
  };

  render() {
    const { userName, emailId, password, confirmPassword, signupSuccess } =
      this.state;
    if (signupSuccess) {
      return <Redirect to="/" />;
    }
    return (
      <FormLayout formName="Sign Up" onSubmit={this.onSignUp}>
        {this.state.showPopupModel ? (
          <PopUp msg={this.state.popUpMsg} closeModel={this.clodeModel} />
        ) : null}

        <div>
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            value={userName}
            onChange={this.onChangeInput.bind(this, "username")}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={emailId}
            onChange={this.onChangeInput.bind(this, "email")}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.onChangeInput.bind(this, "password")}
          />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={this.onChangeInput.bind(this, "confirmPassword")}
          />
        </div>
        {this.state.errorMsg.length > 0 ? (
          <p className="auth-error-msg">{this.state.errorMsg}</p>
        ) : (
          ""
        )}
        <br />
        <input type="submit" value="  Sign Up" className="auth-button" />

        <div>
          Already have an account? <Link to="/">Log In</Link>
        </div>
      </FormLayout>
    );
  }
}

export default Signup;
