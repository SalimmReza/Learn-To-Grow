import React from 'react';

const QuizDetails = ({ questions }) => {
    console.log(questions)
    const index = questions.indexof
    // console.log(questions.indexof)

    return (
        <div>
            <div className='w-[50%] m-auto'>


                <div className='h-[350px] w-full bg-white-500 shadow-lg rounded-lg mt-20 shadow-green-800 pt-5'>
                    <h1>{questions.question}</h1>
                    <div className='flex my-10'>
                        <div className='flex items-center p-2 h-[100px] w-[50%] mx-5 border-2 border-green-200 rounded-lg'>
                            <h1>{questions.options[0]}</h1>
                        </div>
                        <div className=' flex items-center p-2 mx-5 h-[100px] w-[50%] border-2 border-green-200 rounded-lg '>
                            <h1>{questions.options[1]}</h1>
                        </div>

                    </div>

                    <div className='flex'>
                        <div className='p-2 flex items-center h-[100px] w-[50%] mx-5 border-2 border-green-200 rounded-lg'>
                            <h1>{questions.options[2]}</h1>
                        </div>
                        <div className=' p-2 flex items-center mx-5 h-[100px] w-[50%] border-2 border-green-200 rounded-lg '>
                            <h1>{questions.options[3]}</h1>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default QuizDetails;