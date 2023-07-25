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

export function MainChart({data}){

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
            text: data.title
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
      
      const labels = ['Desktop'];
      
       const item = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [Number(data.range[0])],
            backgroundColor: 'rgb(12 206 106)',
            borderColor: 'rgb(255 255 255)',
            borderWidth: 2
          },
          {
            label: 'Dataset 2',
            data: [Number(data.range[1])],
            backgroundColor: 'rgb(255 164 0)',
            borderColor: 'rgb(255 255 255)',
            borderWidth: 2
          },
          {
            label: 'Dataset 2',
            data:[ Number(data.range[2])],
            backgroundColor: 'rgb(255 78 67)',
            borderColor: 'rgb(255 255 255)',
            borderWidth: 2
          },
         
        ],
      };

      return (
            
        <Bar options={options} data={item} />
      )
}
