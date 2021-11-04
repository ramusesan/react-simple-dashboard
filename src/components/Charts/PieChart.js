import React from "react";
import { Chart } from "react-google-charts";

export default function PieChart(props) {
  return (
    <div>
      <Chart
        className="chart-list"
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={props.data}
        options={{
          title: "My Daily Activities",
          // Just add this option
          is3D: true,
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}
