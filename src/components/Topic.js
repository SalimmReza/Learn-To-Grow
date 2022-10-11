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
            <div className="relative flex items-center w-full  bg-center bg-cover h-96 dark:bg-gray-500 image" >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                <div className=' flex flex-col-reverse justify-center'>
                    <h2 className=" flex  font-semibold text-white ">
                        We help you build and maintain the health of your organisation. We support people to develop practical skills grounded in their real-world experience.
                    </h2>
                    <h1 className='text-white'>Learn To Grow    Make your Future</h1>

                </div>



            </div>
            <div className='sm:w-[70%] m-auto lg:w-[60%]'>
                <div className=' gap-1 my-10'>
                    <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                        {
                            subjects.map(subject => <Subject
                                key={subject.id}
                                subject={subject}
                            ></Subject>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Topic;