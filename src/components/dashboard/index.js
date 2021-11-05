import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { chartLists, compontList } from "../utils/constants";
import { getUserData } from "../utils/user";
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
    const userObj = getUserData();

    const anythingToVisible = charts.some((item) => item.checked === true);

    if (!anythingToVisible || charts.length === 0) {
      if (
        (userObj !== undefined || userObj !== null) &&
        userObj.role === "admin"
      ) {
        return (
          <div id="no-chart__msg">
            <h5>
              {" "}
              Goto <Link to="/settings"> Settings </Link> page to update
              visiblity of charts{" "}
            </h5>
          </div>
        );
      }
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
          <Spinner backDrop={this.state.showSpinner} />
        ) : (
          <section className="chart-container">{this.renderCharts()}</section>
        )}

        <Footer />
      </div>
    );
  }
}

export default Dashboard;
