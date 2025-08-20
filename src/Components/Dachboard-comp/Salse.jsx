import React from "react";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesBarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [3000, 2500, 4000, 3200, 5000, 4500],
        backgroundColor: 'rgb(203, 203, 206)',
        borderColor: 'rgb(203, 203, 206)',
        borderWidth: 1,
        
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data',
        color: 'black',
        font: {
          size: 20,
        },
      },
      legend: {
        labels: {
          color: 'black',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: ' black',
        },
      },
      y: {
        ticks: {
          color: 'black',
        },
      },
    },
  };

  return (
    <div className="container my-5 p-lg-5 border rounded bg-white shadow ">
      <h3 className="text-center  mb-4">Sales Bar Chart</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesBarChart;
