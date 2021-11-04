import React from "react";
import Chart from "react-google-charts";

export default function DateRangeFilterChart(props) {
  return (
    <div>
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="Table"
        loader={<div>Loading Chart</div>}
        data={props.data}
        rootProps={{ "data-testid": "1" }}
        chartPackages={["corechart", "controls"]}
        controls={[
          {
            controlType: "DateRangeFilter",
            options: {
              filterColumnLabel: "Year",
              ui: { format: { pattern: "yyyy" } },
            },
          },
        ]}
      />
    </div>
  );
}
