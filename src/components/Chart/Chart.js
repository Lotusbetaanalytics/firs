import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Visitors Today", "Pending", "Checked In", "Checked Out"],
  datasets: [
    {
      data: [12, 19, 3, 5],
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

export default function DoughChart() {
  return <Doughnut data={data} />;
}
