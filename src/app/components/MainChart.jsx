"use client"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Bar } from 'react-chartjs-2';

export function MainChart(){

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
      
       const options = {
        indexAxis: 'y',
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
          },
        },
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      };
      
      const labels = ['Desktop', 'Phone'];
      
       const item = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [90, 10],
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Dataset 2',
            data: [10, 10],
            backgroundColor: 'rgb(75, 192, 192)',
          },
        ],
      };

      return (
        <Bar options={options} data={item} />
      )
}
