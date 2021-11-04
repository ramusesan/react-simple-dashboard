import React, { Component } from "react";
import FormLayout from "./FormLayout";
import "../../styles/main.css";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <section>
          <FormLayout />
        </section>
      </div>
    );
  }
}
