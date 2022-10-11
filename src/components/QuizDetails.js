import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = ({ questions }) => {
    // console.log(questions.correctAnswer)


    const quesHandleClick = (e) => {
        const newCart = e.target.innerText;
        if (newCart !== questions.correctAnswer) {
            console.log(questions.correctAnswer.length, newCart.length)

            const notify = () => {
                // Set to 10sec
                toast.warning('Danger', { autoClose: 10000 });
                toast('Hello Geeks');

            }
        }
        else {
            alert('Great Job!')
            console.log("c", questions.correctAnswer.length, newCart.length)
        }

    }



    const eyeHandleClick = () => {
        const newCart = questions.correctAnswer;
        // console.log(newCart)

    }

    const spit = questions.question.split('<p>')
    const a = spit.join("")
    const spit2 = questions.question.split('</p>')
    const b = spit.join("")

    return (
        <div>
            <div className='w-[50%] m-auto'>


                <div className='h-[400px] w-full bg-white-500 shadow-lg rounded-lg mt-20 shadow-green-800 pt-2'>

                    <h1 onClick={eyeHandleClick, notify} className='flex justify-end px-2'>  <FontAwesomeIcon className='flex justify-end cursor-pointer' icon={faEye}></FontAwesomeIcon></h1>


                    <h1>{a}</h1>

                    <div className='flex my-10'>
                        <div className='flex items-center p-2 h-[100px] w-[50%] mx-5 border-2 border-green-200 rounded-lg'>

                            <h1 onClick={(e) => quesHandleClick(e)}>{questions.options[0]}</h1>
                        </div>
                        <div className=' flex items-center p-2 mx-5 h-[100px] w-[50%] border-2 border-green-200 rounded-lg '>

                            <h1 onClick={(e) => quesHandleClick(e)}>{questions.options[1]}</h1>
                        </div>

                    </div>

                    <div className='flex'>
                        <div className='p-2 flex items-center h-[100px] w-[50%] mx-5 border-2 border-green-200 rounded-lg'>

                            <h1 onClick={(e) => quesHandleClick(e)}>{questions.options[2]}</h1>
                        </div>
                        <div className=' p-2 flex items-center mx-5 h-[100px] w-[50%] border-2 border-green-200 rounded-lg '>

                            <h1 onClick={(e) => quesHandleClick(e)}>{questions.options[3]}</h1>
                        </div>

                    </div>

                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;