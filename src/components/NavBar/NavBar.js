import React from 'react';
import { Link, NavLink } from 'react-router-dom';




const NavBar = () => {


    return (

        <div className="navbar bg-base-100 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='topic'>Topic</Link>
                        </li>
                        <li>
                            <Link to='statistics'>Statistics</Link>
                        </li>
                        <li>
                            <Link to='blog'>Blog</Link>
                        </li>
                    </ul>
                </div>
                <a href='./' className="btn btn-ghost normal-case text-xl">LearnTo<span className='text-red-600'>Grow</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='topic'>Topic</NavLink>
                    </li>
                    <li>
                        <NavLink to='statistics'>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to='blog'>Blog</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <h1 className="font-medium">Make Your <span className='text-red-400'>Future</span> </h1>
            </div>
        </div>
    );
};

export default NavBar;