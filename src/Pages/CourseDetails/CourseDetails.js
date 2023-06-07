import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseInfo = useLoaderData();
    const { author, name, title, _id, details } = courseInfo;
    console.log(courseInfo);
    return (
        <div>

        </div>
    );
};

export default CourseDetails;