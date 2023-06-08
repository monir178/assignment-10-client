import React from 'react';
import { Link } from 'react-router-dom';
import { FcRating } from "react-icons/fc";

const CourseCard = ({ course }) => {
    const { _id, title, rating, enrolled, author, details } = course;
    console.log(course);
    return (

        <div data-aos="fade-up" className='flex justify-around items-center'>
            <div className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl ">
                <figure><img src={author?.img} className='w-full h-64' alt="" /></figure>
                <div className="card-body">
                    <h2 className='font-semibold text-lg'>{title}</h2>
                    <h3 className='font-black'>Instructor:  {author?.name}</h3>
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
                    <div className='flex justify-between my-4'>
                        <p className='font-semibold'>Enrolled: {enrolled}</p>
                        <div className='flex justify-end items-center font-semibold'>
                            <FcRating className='w-5 h-5'></FcRating>
                            <p className='ms-2'>{rating?.number}</p> </div>


                    </div>
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