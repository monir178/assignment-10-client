import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseInfo = useLoaderData();
    const { author, name, title, _id, details } = courseInfo;
    console.log(courseInfo);

    return (
        <div className="flex justify-center items-center  my-8">
            <div className="bg-base-200 mx-4 md:mx-8 lg:mx-auto  rounded-lg shadow-lg p-6 md:p-8 lg:p-10 max-w-3xl">
                <div className="mb-6">
                    <figure className="w-full">
                        <img className="w-full object-cover rounded-t-lg" src={author?.img} alt="" />
                    </figure>
                    <h3 className="text-xl font-bold mt-4">{title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{details}</p>
                <div className="flex justify-end">
                    <Link>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">
                            Enroll Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
