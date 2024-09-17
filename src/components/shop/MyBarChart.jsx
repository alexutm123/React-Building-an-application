// src/components/ShopBarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { dataShop } from '../../data-shop';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: dataShop.map(shop => shop.title),
  datasets: [
    {
      label: 'Максимальная Цена',
      data: dataShop.map(shop => shop.maxPrice),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Минимальная Цена',
      data: dataShop.map(shop => shop.minPrice), 
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
    {
      label: 'Количество Покупателей',
      data: dataShop.map(shop => shop.numberOfCustomers), 
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    },
    {
      label: 'Рейтинг',
      data: dataShop.map(shop => shop.rating), 
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          return context.dataset.label + ': ' + context.raw;
        }
      }
    }
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const ShopBarChart = () => (
  <div className="container">
     <div style={{ width: '800px', height: '500px' }}>
        <h2>Data Shop</h2>
        <Bar data={data} options={options} />
    </div>
  </div>

);

export default ShopBarChart;
