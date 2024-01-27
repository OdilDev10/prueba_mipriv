import { Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const data = {
  labels: ['Variable 1', 'Variable 2', 'Variable 3', 'Variable 4', 'Variable 5'],
  datasets: [
    {
      label: 'Datos de ejemplo',
      data: [80, 60, 45, 70, 90],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export const RadarChartComponent = () => <Radar data={data} />;
