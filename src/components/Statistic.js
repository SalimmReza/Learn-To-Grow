import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticDetails from './StatisticDetails';

const Statistic = () => {

    const item = useLoaderData();
    const subjects = item.data;
    //  const courses = item.data
    // console.log(subjects)
    return (
        <div>  <h1 className='mt-10' > Bar Charts of Total Quiz</h1>

            <div className='flex justify-center my-10  mx-0'>

                {
                    subjects.map(subject => <StatisticDetails
                        key={subject.id}
                        subject={subject}
                    ></StatisticDetails>)
                }
            </div>
        </div>
    );

};

export default Statistic;