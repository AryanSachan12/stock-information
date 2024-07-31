import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const SemiCircleChart = () => {
  const data = {
    datasets: [
      {
        data: [300, 50, 100, 40, 120], // Example data
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#E7E9ED',
          '#4BC0C0',
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Red', 'Blue', 'Yellow', 'Grey', 'Green'], // Example labels
  };

  const options = {
    circumference: 180, // Half circle
    rotation: -90, // Start the chart from the top
    cutout: '50%', // Adjust for doughnut thickness
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '300px', height: '150px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SemiCircleChart;