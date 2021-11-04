import React, { Component } from "react";
import "../../styles/popup.css";

export default class PopUp extends Component {
  render() {
    return (
      <section id="model-container">
        <div id="backdrop" onClick={this.props.closeModel}></div>
        <div id="msg-container">
          <p>{this.props.msg}</p>
          <div>
            <button id="model-close__button" className="submit-button" onClick={this.props.closeModel}>OK</button>
          </div>
        </div>
      </section>
    );
  }
}
