import React from 'react';
import { FaMoneyCheckAlt, FaCheck } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';


const Checkout = () => {
    const checkedCourse = useLoaderData();
    console.log(checkedCourse);
    const { title, author, enrolled } = checkedCourse;

    return (
        <div>
            <div className='flex flex-col justify-center items-center my-12 bg-base-200 w-96 mx-auto py-12 px-8 rounded-xl shadow-xl'>
                <FaMoneyCheckAlt className='w-20 h-20 text-green-700'></FaMoneyCheckAlt>
                <h2 className='mt-4 font-semibold text-lg'>You have successfully enrolled in <span className='text-blue-600'>{title} </span> course.</h2>
                <p className='mt-4 font-semibold'> <span className='text-blue-600'>{enrolled}</span> students have enrolled in this course. </p>
                <p className='font-semibold '> "<span className='text-blue-600'>{author.name}</span> Sir is your Instructor."</p>
                <p className='mt-4 font-semibold'>Check your email for the facebook group link. </p>
                <p className='mt-4 font-semibold'>Call us for any kind of information you need.
                    <span className='text-blue-600'>  +999678857898</span>
                </p>
                <button className="flex justify-center items-center mt-4 px-12 py-4 rounded-lg  text-white text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-700">
                    <FaCheck className='w-6 h-6 me-2 text-white'></FaCheck>
                    <span>Checkout</span> </button>
            </div>

        </div>
    );
};

export default Checkout;