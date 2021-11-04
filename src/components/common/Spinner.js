import React from "react";
import "../../styles/common.css";
import spinner from "../../assets/spinner.gif";

export default function Spinner(props) {
  const {backdrop} = props.backdrop || false;
  const noBg = backdrop ? "" : "transparent";
  return (
    <div id="spinner-container">
      <div id="spinner-backdrop" style={{ background: `${noBg}` }}>
        <div id="spinner-section">
          <img src={spinner} alt="spinner" id="spinner-icon" />
        </div>
      </div>
    </div>
  );
}
