import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MockAnalysisComponent = () => {
  // Mock data
  const mockResults = [
    { id: 1, name: 'Mock Test 1', score: 75 },
    { id: 2, name: 'Mock Test 2', score: 85 },
    { id: 3, name: 'Mock Test 3', score: 65 },
    { id: 4, name: 'Mock Test 4', score: 90 },
    { id: 1, name: 'Mock Test 1', score: 75 },
    { id: 2, name: 'Mock Test 2', score: 85 },
    { id: 3, name: 'Mock Test 3', score: 65 },
    { id: 4, name: 'Mock Test 4', score: 90 },
    { id: 1, name: 'Mock Test 1', score: 75 },
    { id: 2, name: 'Mock Test 2', score: 85 },
    { id: 3, name: 'Mock Test 3', score: 65 },
    { id: 4, name: 'Mock Test 4', score: 90 },
    { id: 1, name: 'Mock Test 1', score: 75 },
    { id: 2, name: 'Mock Test 2', score: 85 },
    { id: 3, name: 'Mock Test 3', score: 65 },
    { id: 4, name: 'Mock Test 4', score: 90 },
  ];

  // Calculate average score
  const totalScore = mockResults.reduce((acc, mock) => acc + mock.score, 0);
  const averageScore = (totalScore / mockResults.length).toFixed(2);

  // Bar chart data
  const chartData = {
    labels: mockResults.map((mock) => mock.name),
    datasets: [
      {
        label: 'Mock Scores',
        data: mockResults.map((mock) => mock.score),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow dynamic resizing
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#f9fafb',
        titleColor: '#111827',
        bodyColor: '#374151',
        borderColor: '#e5e7eb',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#e5e7eb',
        },
        title: {
          display: true,
          text: 'Score',
          color: '#4b5563',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Mock Tests',
          color: '#4b5563',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-8 px-4 sm:px-6 md:px-12 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
        Mock Test Analysis
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-full lg:w-full">
        <p className="text-lg sm:text-xl font-medium text-gray-700 mb-4 text-center">
          Average Score: <span className="text-pink-500 font-extrabold">{averageScore}</span>
        </p>
        <div className="relative w-full h-96 sm:h-[400px] md:h-[500px] lg:h-[600px] mx-auto">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default MockAnalysisComponent;
