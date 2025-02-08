// PieChart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

// Register required Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const PieChart: React.FC = () => {
  // Define colors with 20% transparency
  const colors = [
    'rgba(255, 99, 132, 0.2)',  // Red with 20% opacity
    'rgba(54, 162, 235, 0.2)',  // Blue with 20% opacity
    'rgba(255, 206, 86, 0.2)',  // Yellow with 20% opacity
    'rgba(75, 192, 192, 0.2)',  // Green with 20% opacity
    'rgba(255, 87, 51, 0.2)',   // Orange with 20% opacity
  ];

  // Define fully opaque colors for the border
  const borderColors = [
    'rgba(255, 99, 132, 1)',  // Fully opaque red
    'rgba(54, 162, 235, 1)',  // Fully opaque blue
    'rgba(255, 206, 86, 1)',  // Fully opaque yellow
    'rgba(75, 192, 192, 1)',  // Fully opaque green
    'rgba(255, 87, 51, 1)',   // Fully opaque orange
  ];

  const data = {
    labels: ['Marketing', 'Revenue Share', 'Team', 'Development', 'Treasury'],
    datasets: [
      {
        label: 'Distribution',
        data: [30, 20, 20, 15, 15],
        backgroundColor: colors, // Background color with 20% opacity
        hoverBackgroundColor: colors, // Keep hover color the same as background
        borderColor: borderColors, // Fully opaque border colors
        borderWidth: 1, // Border width
      },
    ],
  };

  const options = {
    responsive: true, // Ensure responsiveness
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true, // Make legend items circular
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Black tooltip with 40% transparency
        titleColor: 'white', // White title text
        bodyColor: 'white', // White body text
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label;
            const value = tooltipItem.raw;
            return `${label}: ${value}%`; // Display label and value
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 1, // Set border width between slices
      },
    },
    cutout: 140, // Inner radius (90px)
    radius: 180, // Outer radius (160px)
  };

  return (
    <div style={{ width: '575px', height: '575px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
