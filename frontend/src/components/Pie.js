import React, { useEffect, useState } from "react";
import axios from "axios";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

export const PieChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/api/chart-data")
      .then(res => {
        const { data, columns } = res.data;

        const labelKey = columns[0]; // e.g., 'Month' or 'Category'
        const valueKeys = columns.slice(1); // e.g., ['Plan', 'Actual']

        // Convert data into scatter format: { x: index, y: value }
        const datasets = valueKeys.map((key, idx) => ({
          label: key,
          data: data.map((row, i) => ({
            x: i + 1,         // Use index or parse x value here if needed
            y: row[key]
          })),
          backgroundColor: getColor(idx, 0.7),
          borderColor: getColor(idx),
          pointRadius: 5
        }));

        setChartData({ datasets });
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
        <Scatter
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
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Index / Time"
                },
                ticks: {
                  stepSize: 1
                }
              },
              y: {
                title: {
                  display: true,
                  text: "Value"
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
