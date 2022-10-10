import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from './Subject';
import './Topic.css'

const Topic = () => {
    const items = useLoaderData();
    const subjects = items.data;
    // console.log(subjects);

    return (
        <div>
            <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 image" >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                <h2 className="z-10 p-5 font-semibold text-white ">
                    We help you build and maintain the health of your organisation. We support people to develop practical skills grounded in their real-world experience.
                </h2>
            </div>

            <div className='w-[60%] m-auto gap-1 my-10'>
                <div className='grid grid-cols-2'>
                    {
                        subjects.map(subject => <Subject
                            key={subject.id}
                            subject={subject}
                        ></Subject>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Topic;