import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticDetails from './StatisticDetails';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const Statistic = () => {
    const item = useLoaderData();
    const subjects = item.data;
    //  const courses = item.data
    // console.log(subjects)

    return (
        <div>
            {
                subjects.map(subject => <StatisticDetails
                    key={subject.id}
                    subject={subject}
                ></StatisticDetails>)
            }
        </div>
    );
};

export default Statistic;