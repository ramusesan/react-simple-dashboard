import React, { Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { chartLists, compontList } from "../utils/constants";
import Spinner from "../common/Spinner";
import "../../styles/main.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showSpinner: false });
    }, 1000);
  }
  renderCharts = () => {
    const charts = chartLists();

    const anythingToVisible = charts.some((item) => item.checked === true);

    if (!anythingToVisible || charts.length === 0) {
      return (
        <div id="no-chart__msg">
          <h5>Please contact Admin </h5>
          <p>
            <a href="mailto: admin@xyz.com">admin@xyz.com</a>{" "}
          </p>
        </div>
      );
    }
    return charts.map((list, index) => {
      if (list.checked) {
        return (
          <div className="chart-item" key={index.toString()}>
            {React.createElement(
              compontList[list.name].component,
              compontList[list.name].data
            )}
          </div>
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.showSpinner ? (
          <Spinner />
        ) : (
          <section className="chart-container">{this.renderCharts()}</section>
        )}

        <Footer />
      </div>
    );
  }
}

export default Dashboard;
