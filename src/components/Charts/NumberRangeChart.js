import React from "react";

import { Chart } from "react-google-charts";

export default function NumberRangeChart(props) {
  return (
    <div>
      <Chart
       className="chart-list"
       width={"470px"}
       height={"270px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={props.data}
        rootProps={{ "data-testid": "6" }}
        chartPackages={["corechart", "controls"]}
        controls={[
          {
            controlType: "StringFilter",
            options: {
              filterColumnIndex: 0,
              matchType: "any", // 'prefix' | 'exact',
              ui: {
                label: "Search by name",
              },
            },
          },
        ]}
      />
    </div>
  );
}
