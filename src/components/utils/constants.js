import PieChart from "../Charts/PieChart";
import NumberRangeChart from "../Charts/NumberRangeChart";
import GeoChart from "../Charts/GeoChart";
import ComboChart from "../Charts/ComboChart";
import DateRangeFilterChart from "../Charts/DateRangeFilterChart";
import TableChart from "../Charts/TableChart";
// import BarChart from "../Charts/BarChart";
// import TimeLineChart from "../Charts/TimeLineChart";
// import LineChart from "../Charts/LineChart";

const FAKE_JSON = require("../../db/charts.json");
const {
  geoChart,
  numberRangeChart,
  comboChart,
  pieChart,
  dateRangeFilterChart,
  tableChart,
} = JSON.parse(JSON.stringify(FAKE_JSON));

export const RouterList = [
  {
    path: "/dashboard",
    main: () => <h2>User Profile</h2>,
  },
  {
    path: "/setting",
    main: () => <h2>Settings</h2>,
  },
];

export const chartLists = () => {
  const updatedChartList = JSON.parse(localStorage.getItem("chartsList"));
  if (updatedChartList && updatedChartList.length > 0) {
    return updatedChartList;
  }

  return [
    {
      name: "geoChart",
      label: "Geo Chart",
      checked: true,
    },
    {
      name: "numberRangeChart",
      label: "NumberRange Chart",
      checked: true,
    },
    {
      name: "comboChart",
      label: "Combo Chart",
      checked: true,
    },
    {
      name: "pieChart",
      label: "Pie Chart",
      checked: true,
    },
    {
      name: "dateRangeFilterChart",
      label: "DateRange Filter Chart",
      checked: true,
    },
    {
      name: "tableChart",
      label: "Table Chart",
      checked: true,
    },
  ];
};

export const compontList = {
  geoChart: { component: GeoChart, data: geoChart },
  numberRangeChart: { component: NumberRangeChart, data: numberRangeChart },
  comboChart: { component: ComboChart, data: comboChart },
  pieChart: { component: PieChart, data: pieChart },
  dateRangeFilterChart: {
    component: DateRangeFilterChart,
    data: dateRangeFilterChart,
  },
  tableChart: { component: TableChart, data: tableChart },
};
