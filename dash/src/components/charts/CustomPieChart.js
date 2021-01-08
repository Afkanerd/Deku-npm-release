import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { GiNetworkBars } from 'react-icons/gi';

const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
        {
            label: '# Uptime',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
}

Chart.defaults.global.legend.position = 'left';
const CustomPieChart = () => (
    <>
        <div className='bg-white p-4 rounded-lg shadow-sm'>
            <h4 className='mb-4'><GiNetworkBars /> Uptime</h4>

            <Doughnut data={data} />
        </div>
    </>
)

export default CustomPieChart
