import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import FormLayout from "../Layout/FormLayout";
import "../../styles/login.css";
import { setUserSession } from "../utils/user";
import { isSessionExist } from "../utils/user";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginSucces: false,
      userName: "",
      password: "",
      errorMsg: "",
      rememberMe: false,
    };
  }



  componentDidMount() {
    if (isSessionExist()) {
      this.setState({ loginSucces: true });
    }
    const adminData = [
      {
        email: "admin@gmail.com",
        role: "admin",
        userName: "admin",
        password: "admin",
      },
    ];

    var existingUsers =
      JSON.parse(JSON.stringify(localStorage.getItem("users"))) || [];
    if (existingUsers.length === 0) {
      localStorage.setItem("users", JSON.stringify(adminData));
    }

    this.setState({
      userName: localStorage.getItem("rememberUser"),
      password: "",
    });
  }

  onChangeInput = (type, e) => {
    if (type === "userName") {
      this.setState({ userName: e.target.value, errorMsg: "" });
    }
    if (type === "password") {
      this.setState({ password: e.target.value, errorMsg: "" });
    }
    if (type === "rememberMe") {
      this.setState({ rememberMe: e.target.checked });
    }
  };

  doLogin = (event) => {
    event.preventDefault();
    // Check whether user exists in DB with API or not
    const dbUsers = JSON.parse(localStorage.getItem("users"));
    const userExist = dbUsers.filter((user, index) => {
      if (
        (user.userName === this.state.userName ||
          user.email === this.state.userName) &&
        user.password === this.state.password
      ) {
        return user;
      }
      return null;
    });

    if (userExist[0]) {
      this.setState({ loginSucces: true });
      setUserSession(this.state.userName);
      localStorage.setItem("currentUser", JSON.stringify(userExist[0]));
      if (this.state.rememberMe) {
        localStorage.setItem("rememberUser", this.state.userName);
      }
    } else {
      this.setState({ errorMsg: "incorrect credentails" });
      localStorage.setItem("rememberUser", "");
    }
  };

  render() {
    const { userName, password } = this.state;

    if (this.state.loginSucces) {
      return <Redirect to="/dashboard" push />;
    }
    return (
      <FormLayout formName="Login" onSubmit={this.doLogin}>
        <input
          type="text"
          name="üsername"
          placeholder="User Name"
          value={userName}
          onChange={this.onChangeInput.bind(this, "userName")}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangeInput.bind(this, "password")}
        />{" "}
        {this.state.errorMsg.length > 0 ? (
          <p className="auth-error-msg"> {this.state.errorMsg} </p>
        ) : (
          ""
        )}
        <div>
          <input
            type="checkbox"
            onChange={this.onChangeInput.bind(this, "rememberMe")}
          />
          <label>Remember Me</label>
        </div>
        <input type="submit" className="auth-button" value="Login" />
        <div>
          <Link to="/resetPassword">Forgot Password </Link> <br />
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </FormLayout>
    );
  }
}

export default Login;
