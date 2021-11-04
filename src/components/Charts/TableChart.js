import React from "react";
import Chart from "react-google-charts";

export default function TableChart(props) {
  return (
    <div>
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="Table"
        loader={<div>Loading Chart</div>}
        data={props.data}
        options={{
          showRowNumber: true,
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}
