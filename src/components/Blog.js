import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from './Subject';

const Blog = () => {
    const subjects = useLoaderData();
    return (
        <div>
            {
                subjects.map(subject => <Subject
                    key={subject.id}
                    subject={subject}
                ></Subject>)
            }
        </div>
    );
};

export default Blog;