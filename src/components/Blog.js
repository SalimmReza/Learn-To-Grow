import React from 'react';


const Blog = () => {

    return (
        <div className='w-[50%] m-auto mt-20'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Purpose of React Router
                </div>
                <div className="collapse-content">
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does Context Api work
                </div>
                <div className="collapse-content">
                    <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page</p>
                </div>
            </div>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    useRef()
                </div>
                <div className="collapse-content">
                    <p>The useRef Hook allows you to persist values between renders.

                        It can be used to store a mutable value that does not cause a re-render when updated.

                        It can be used to access a DOM element directly. <br />
                        If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. <br />
                        useRef() only returns one item. It returns an Object called current.

                        When we initialize useRef we set the initial value: useRef(0).



                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;