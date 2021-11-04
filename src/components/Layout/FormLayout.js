import React, { Component } from "react";
import "../../styles/main.css";

class FormLayout extends Component {
  render() {
    return (
      <div className="main">
        {" "}
        <div className=" auth-container">
          <form onSubmit={this.props.onSubmit} autoComplete="off">
            <fieldset>
              <legend>{this.props.formName} </legend>
              {this.props.children}
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default FormLayout;
