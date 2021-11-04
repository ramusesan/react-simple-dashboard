import React from "react";
import Chart from "react-google-charts";

export default function ComboChart(props) {
  return (
    <div>
      <Chart
        width={"650px"}
        height={"300px"}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={props.data}
        options={{
          title: "Monthly Coffee Production by Country",
          vAxis: { title: "Cups" },
          hAxis: { title: "Month" },
          seriesType: "bars",
          series: { 5: { type: "line" } },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}
