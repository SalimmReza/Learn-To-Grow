import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const StatisticDetails = ({ subject }) => {
    const { name, id, logo, total } = subject
    // console.log(subject)


    const data = [
        {
            name: name,
            uv: total
        },

    ];
    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
    );
};

export default StatisticDetails;