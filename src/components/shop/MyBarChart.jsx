import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyBarChart = ({ maxPrice, minPrice, numberOfCustomers }) => {
  const data = {
    labels: ['Max Price', 'Min Price', 'Number of Customers'],
    datasets: [
      {
        label: 'Store Data/month',
        data: [maxPrice, minPrice, numberOfCustomers],
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Updated color for better visibility
        borderColor: 'rgba(54, 162, 235, 1)', // Updated border color
        borderWidth: 2, // Increased border width for clarity
        barThickness: 40, // Increased bar thickness for better visibility
        maxBarThickness: 60, // Maximum thickness to ensure bars are visually distinct
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'rgba(0, 0, 0, 0.6)', // Adjusted legend text color for better readability
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`; // Improved label formatting
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Categories', // Added X-axis title
          color: 'rgba(0, 0, 0, 0.6)',
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.7)', // Adjusted tick color for better readability
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Values', // Added Y-axis title
          color: 'rgba(0, 0, 0, 0.6)',
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.7)', // Adjusted tick color for better readability
          callback: function (value) {
            return value >= 1000 ? value / 1000 + 'k' : value; // Format large numbers
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MyBarChart;
