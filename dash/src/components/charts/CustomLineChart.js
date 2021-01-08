import React from 'react';
import { Line } from 'react-chartjs-2';

import { BsEnvelope } from "react-icons/bs";

const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
        {
            label: 'MTN',
            data: [1200, 1900, 300, 500, 200, 300],
            fill: false,
            backgroundColor: '#FFD700',
            borderColor: '#FFD700',
            yAxisID: 'y-axis-1',
        },
        {
            label: 'Orange',
            data: [100, 200, 100, 100, 200, 200],
            fill: false,
            backgroundColor: '#000000',
            borderColor: '#000000',
            yAxisID: 'y-axis-2',
        },
    ],
}

const options = {
    scales: {
        yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
            },
            {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                    drawOnArea: false,
                },
            },
        ],
    },
    legend : {
        position: "bottom"
    }
}

Chart.defaults.global.legend.position = 'bottom';

const CustomLineChart = () => (
    <>
        <div className="bg-white p-4 rounded shadow-sm">
            <h5 className="mb-4"><BsEnvelope /> This Week</h5>
            <Line data={data} options={options} />
        </div>
    </>
)

export default CustomLineChart;
