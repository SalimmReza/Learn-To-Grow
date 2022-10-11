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
        <div className='mt-20 '>
            <h1>Quiz of {name}</h1>

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