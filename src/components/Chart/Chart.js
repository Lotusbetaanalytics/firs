import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export default function DoughChart(props) {
  const data = {
    labels: [
      "Visitors Today",
      "Pending",
      "Checked In",
      "Checked Out",
      "All Visitors",
    ],
    datasets: [
      {
        data: [
          props.visitors,
          props.pending,
          props.checkedin,
          props.checkedout,
          props.allVisitors,
        ],
        backgroundColor: ["teal", "purple", "orange", "pink", "green"],
        border: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
