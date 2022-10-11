import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Array from './Array';
import QuizDetails from './QuizDetails';

const Quiz = () => {
    const item = useLoaderData();
    const subDetails = item.data
    // console.log(item.data.questions)
    const { name, questions } = subDetails
    // console.log(questions.indexof(options))
    const qs = subDetails.questions;


    // for (const sub of questions) {
    //     console.log(sub.indexof(options));
    // }


    return (
        <div className='mt-20 text-lg '>
            <h1 className='text-xl font-bold'>Quiz of <span className='text-blue-800'>{name}</span> </h1>

            {
                qs.map(questions => <QuizDetails
                    key={questions.id}
                    questions={questions}

                ></QuizDetails>)

            }









        </div >
    );
};

export default Quiz;