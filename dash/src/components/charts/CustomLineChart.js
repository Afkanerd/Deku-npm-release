import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { BsEnvelope} from "react-icons/bs";


const data = [
    {
        name: 'Sun', Orange: 4000, MTN: 2400, amt: 2400,
    },
    {
        name: 'Mon', Orange: 3000, MTN: 1398, amt: 2210,
    },
    {
        name: 'Tue', Orange: 2000, MTN: 9800, amt: 2290,
    },
    {
        name: 'Wed', Orange: 2780, MTN: 3908, amt: 2000,
    },
    {
        name: 'Thu', Orange: 1890, MTN: 4800, amt: 2181,
    },
    {
        name: 'Fri', Orange: 2390, MTN: 3800, amt: 2500,
    },
    {
        name: 'Sat', Orange: 3490, MTN: 4300, amt: 2100,
    },
];

const CustomLineChart = () => {

    return (
        <div className="bg-white p-4 rounded shadow-sm">
            <h5 className="mb-4"><BsEnvelope /> This Week</h5>
            <LineChart
                width={500}
                height={275}
                data={data}
                margin={{
                    top: 5, right: 5, left: 5, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="MTN" stroke="#FFD700" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Orange" stroke="#000000" />
            </LineChart>
        </div>
    );
}

export default CustomLineChart;
