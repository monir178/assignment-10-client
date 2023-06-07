import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { _id, title, rating, enrolled, author, image_url, details } = course;
    console.log(course);
    return (

        <div data-aos="fade-up" className='flex justify-center items-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure><img src={author?.img} className='w-full h-64' alt="" /></figure>
                <div className="card-body">
                    <h2 className='font-semibold text-lg'>{title}</h2>
                    <p>
                        {
                            details.length > 200 ?
                                <>
                                    {details.slice(0, 200) + "..."}
                                </>
                                :
                                details
                        }
                    </p>
                    <div className="card-actions justify-end">
                        <Link
                            className='text-sm font-semibold underline-offset-1 underline text-blue-500'
                            to={`/courses/${_id}`}
                        ><button className="btn-sm rounded-lg  text-white text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-700">View Details</button>
                        </Link>

                    </div>
                </div>
            </div>


        </div>

    );
};

export default CourseCard;