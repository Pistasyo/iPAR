import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS
    , CategoryScale
    , LinearScale
    , PointElement
    , BarElement 
    , Title
    , Tooltip
    , Legend
} from 'chart.js'
import { barChartData } from '../FAKE_DATA'
import React, { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
      CategoryScale
    , LinearScale
    , PointElement
    , BarElement 
    , Title
    , Tooltip
    , Legend
)

export const BarChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/api/chart-data")
      .then(res => {
        const { data, columns } = res.data;

        const labelKey = columns[0]; // e.g., 'Month'
        const valueKeys = columns.slice(1); // e.g., ['Sales2024', 'Sales2023']

        const labels = data.map(row => row[labelKey]);

        const datasets = valueKeys.map((key, idx) => ({
          label: key,
          data: data.map(row => row[key]),
          borderColor: getColor(idx),
          backgroundColor: getColor(idx, 0.2),
          tension: 0.3,
          fill: false,
          pointRadius: 3,
          pointHoverRadius: 6
        }));

        setChartData({ labels, datasets });
      })
      .catch(err => {
        console.error("Error loading chart data:", err);
      });
  }, []);

  const getColor = (i, opacity = 1) => {
    const colors = [
      `rgba(75,192,192,${opacity})`,
      `rgba(255,99,132,${opacity})`,
      `rgba(54,162,235,${opacity})`,
      `rgba(255,206,86,${opacity})`
    ];
    return colors[i % colors.length];
  };

  return (
    <div>
{chartData ? (
  <Bar
    data={chartData}
    options={{
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Plan vs Actual",
          font: {
            size: 18
          }
        }
      }
    }}
  />
) : (
  <p>Loading chart...</p>
)}

    </div>
  );
};