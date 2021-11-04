import React from "react";
import { Chart } from "react-google-charts";

export default function GeoChard(props) {
  console.log("DATA",  props)
  return (
    <div>
      <Chart
        width={"700px"}
        height={"300px"}
        chartType="GeoChart"
        data={props.data}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}
