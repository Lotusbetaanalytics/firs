import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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
        backgroundColor: [
          "Teal",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
        ],
        border: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
