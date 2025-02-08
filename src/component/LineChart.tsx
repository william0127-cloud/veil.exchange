import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ],
  datasets: [
    {
      label: "Monthly Revenue",
      // Data for January to August, a gap for September, isolated value for October, and gaps thereafter.
      data: [
        0,
        20000,
        100000,
        15000,
        2000,
        18000,
        37000,
        9000,
        null,
        4000,
        null,
        null,
      ],
      borderColor: "rgba(255, 190, 0, 0.6)",
      backgroundColor: "rgba(255, 255, 0, 0.2)", // Light yellow for the points
      fill: false,
      tension: 0.1, // Smoothness of the line
      spanGaps: false, // Do not connect points across gaps (null values)
      pointStyle: "circle", // Ensure data points are displayed as circles
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true, // Make legend items circular
        padding: 30,
      },
      onClick: () => {},
    },
    title: {
      display: false,
      text: "Monthly Revenue Data",
    },
  },
  scales: {
    y: {
      // Force the y-axis to only show ticks at 20000, 40000, 60000, 80000, and 100000
      min: 0,
      max: 120000,
      grid: {
        display: true,
        color: "rgba(255, 255, 255, 0.2)", // Guide (grid) line color is white
      },
      ticks: {
        stepSize: 20000,
        callback: function (value: number | string) {
          return "$" + value;
        },
      },
      title: {
        display: false, // No vertical axis title
      },
    },
    x: {
      grid: {
        display: true,
        color: "rgba(255, 255, 255, 0.2)", // x-axis guide lines in white
      },
    },
  },
};

const LineChart: React.FC = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
