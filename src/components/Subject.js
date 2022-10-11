import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Subject = ({ subject }) => {
    const { name, id, logo, total } = subject
    return (
        <div className="card sm:w-full lg:w-[400px] bg-gray-400 shadow-xl my-3">
            <figure className=" pt-2 ">
                <img src={logo} alt="Shoes" className="rounded-xl h-[100px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Total Quiz: {total}</p>
                <div className="card-actions">

                    <Link className='btn btn-primary' to={`/topic/${id}`}>Start Practice <FontAwesomeIcon className='h-10 w-5 mx-3 text-white-800' icon={faArrowRight}></FontAwesomeIcon> </Link>

                </div>
            </div>
        </div>
    );
};

export default Subject;