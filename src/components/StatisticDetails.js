import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const StatisticDetails = ({ subject }) => {
    const { name, id, logo, total } = subject

    const data = [
        {
            name: name,
            Total: total
        },

    ];
    return (
        <BarChart
            width={200}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 20,
                left: 30,
                bottom: 0
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="Total" fill="green" />
        </BarChart>
    );
};

export default StatisticDetails;