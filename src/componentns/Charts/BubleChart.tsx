import { Bubble } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const data = {
  datasets: [
    {
      label: 'Datos de ejemplo',
      data: [
        { x: 10, y: 20, r: 15 },
        { x: 30, y: 40, r: 25 },
        { x: 50, y: 60, r: 20 },
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

export const BubbleChartComponent = () => <Bubble data={data} />;
