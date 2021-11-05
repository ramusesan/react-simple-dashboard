import React from "react";
import Header from "../common/Header";
import "../../styles/settings.css";
import { chartLists } from "../utils/constants";
import PopUp from "../common/PopUp";

var updatedChartLists = chartLists();

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModel: false,
      charts: updatedChartLists,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("chartsList", JSON.stringify(this.state.charts));
    this.toggleModel();
  };

  toggleModel = () => {
    this.setState((prevState) => {
      return { openModel: !prevState.openModel };
    });
  };

  handleChange(type, event) {
    var myList = [...this.state.charts];
    const itemIndex = myList.findIndex((graph) => graph.name === type);

    myList[itemIndex].checked = !myList[itemIndex].checked;

    this.setState((prevState) => {
      return { graph: myList };
    });
  }

  render() {
    return (
      <div>
        <Header />
        <section id="settings-container">
          <div id="settings-form">
            <form onSubmit={this.handleSubmit}>
              <table>
                {this.state.charts.map((chart, index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>
                        <label>{chart.label}</label>
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          checked={chart.checked}
                          name={chart.name}
                          onChange={this.handleChange.bind(this, chart.name)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </table>

              <input
                className="submit-button"
                id="setting-button"
                type="submit"
                value="Update"
              />
            </form>
          </div>
          {this.state.openModel ? (
            <PopUp msg="Updated successfully" closeModel={this.toggleModel} />
          ) : null}
        </section>
      </div>
    );
  }
}
