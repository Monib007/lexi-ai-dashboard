import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function Analytics() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Meetings This Week',
        data: [2, 4, 3, 5, 2, 6, 3],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="analytics-page">
      <h4 className="fw-semibold mb-4">Analytics</h4>

      {/* Summary Cards */}
      <div className="row g-4 mb-5">
        {/* Cards same as before */}
        <div className="col-md-3">
          <div className="card text-bg-primary shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Total Meetings</h6>
              <h4>47</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-bg-success shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Active Members</h6>
              <h4>16</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-bg-warning shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Avg. Meeting Time</h6>
              <h4>42 min</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-bg-info shadow-sm">
            <div className="card-body">
              <h6 className="card-title">This Week</h6>
              <h4>12 meetings</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h6 className="card-title">Meeting Trends</h6>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
