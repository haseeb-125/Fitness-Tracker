import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, BarElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, BarElement, PointElement, LinearScale, Title, CategoryScale);

const WorkoutChart = ({ weightData, frequencyData, historyData }) => {
  const weightChartData = {
    labels: weightData.map(entry => new Date(entry.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Weight Progress',
        data: weightData.map(entry => entry.weight),
        fill: true,
        backgroundColor: '#ff2929',
        borderColor: '#ff2929',
      },
    ],
  };

  const frequencyChartData = {
    labels: frequencyData.map(entry => new Date(entry.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Workout Frequency',
        data: frequencyData.map(entry => entry.count),
        backgroundColor: '#ff2929',
        borderColor: '#ff2929',
      },
    ],
  };

  const historyChartData = {
    labels: historyData.map(entry => new Date(entry.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Exercise History',
        data: historyData.map(entry => entry.value),
        fill: false,
        backgroundColor: '#ff2929',
        borderColor: '#ff2929',
      },
    ],
  };

  // Chart options to style grid lines and index lines
  const chartOptions = {
    scales: {
      x: {
        grid: {
          color: 'black', // Dark black grid lines
          lineWidth: 2,    // Grid line width
        },
        ticks: {
          color: '#6c7293', // gray for index lines (x-axis labels)
        },
      },
      y: {
        grid: {
          color: 'black', // Dark black grid lines
          lineWidth: 2,    // Grid line width
        },
        ticks: {
          color: '#6c7293', // gray for index lines (y-axis labels)
        },
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Weight Chart */}
        <div className="chart-container bg-bg_black border border-bg_black rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Workout Progress</h2>
          <div className="mb-8">
            <Line data={weightChartData} options={chartOptions} />
          </div>
        </div>

        {/* Frequency Chart */}
        <div className="chart-container bg-bg_black border border-bg_black rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Workout Frequency</h2>
          <div className="mb-8">
            <Bar data={frequencyChartData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* History Chart */}
      <div className="chart-container mt-5 bg-bg_black border border-bg_black rounded-lg p-4 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Exercise History</h2>
        <div className="mb-8">
          <Line data={historyChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutChart;
