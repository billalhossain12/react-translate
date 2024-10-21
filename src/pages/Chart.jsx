// HorizontalBarChart.js
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart = () => {
  // Data for the chart
  const data = {
    labels: ['Assets', 'Liabilities', 'Net Worth'],
    datasets: [
      {
        // label: 'Financial Overview',
        data: [50000, 30000, 20000], // Values for Assets, Liabilities, Net Worth
        backgroundColor: [
          'rgba(0, 128, 0, 0.6)',  // Green for Assets
          'rgba(255, 0, 0, 0.6)',   // Red for Liabilities
          'rgba(0, 0, 255, 0.6)',   // Blue for Net Worth
        ],
      },
    ],
  };

  // Options to make the bar chart horizontal and position legend
  const options = {
    indexAxis: 'y', // This makes the chart horizontal
    elements: {
      bar: {
        borderWidth: 2,
        barThickness: 'flex', // Use 'flex' to fill available height
      },
    },
    
    responsive: true,
    scales: {
      x: {
        ticks: {
          callback: function(value) {
            return `$${value}`; // Format the ticks with a dollar sign
          },
        },
        // Adjust bar alignment
        grid: {
          display: false, // Optional: Hide grid lines
        },
      },
      y: {
        barPercentage: 1.0, // Adjusts the width of the bars
        categoryPercentage: 1.0, // Adjusts the spacing between bars
      },
    },
    plugins: {
      legend: {
        position: 'bottom', // Position legend at the bottom
        align: 'center',     // Center the legend
        display:false,
      },
      title: {
        display: false,
        text: 'Financial Overview Chart',
      },
    },
  };

  return (
    <>
    <div className="max-h-[500px] bg-white shadow-md rounded-lg border-[1px] border-gray-300">
      <Bar data={data} options={options} />
    </div>
    <div className='flex items-center justify-center gap-20 my-5 font-semibold'>
      <div className='flex items-center gap-3'>
        <p className='bg-green-700 w-[30px] h-[10px] rounded-[10px]'></p>
        <p>Assets</p>
      </div>
      <div className='flex items-center gap-3'>
        <p className='bg-red-700 w-[30px] h-[10px] rounded-[10px]'></p>
        <p>Liabilities</p>
      </div>
      <div className='flex items-center gap-3'>
        <p className='bg-blue-700 w-[30px] h-[10px] rounded-[10px]'></p>
        <p>Net Worth</p>
      </div>
    </div>
    </>
  );
};

export default HorizontalBarChart;
