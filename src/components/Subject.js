import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Subject = ({ subject }) => {
    const { name, id, logo, total } = subject
    return (
        <div className="card w-96 bg-gray-400 shadow-xl my-3">
            <figure className=" pt-2 ">
                <img src={logo} alt="Shoes" className="rounded-xl h-[100px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Total Quiz: {total}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Start Parctice <FontAwesomeIcon className='h-10 w-5 mx-3 text-white-800' icon={faArrowRight}></FontAwesomeIcon></button>

                </div>
            </div>
        </div>
    );
};

export default Subject;