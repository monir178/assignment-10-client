import React from 'react';
import { FaMoneyCheckAlt, FaCheck } from 'react-icons/fa';


const Checkout = () => {

    return (
        <div>
            <div className='flex flex-col justify-center items-center my-12 bg-base-200 w-96 mx-auto py-12 px-8 rounded-xl shadow-xl'>
                <FaMoneyCheckAlt className='w-20 h-20 text-green-700'></FaMoneyCheckAlt>
                <h2 className='mt-4 font-semibold text-lg'>You have successfully enrolled in this course.</h2>
                <p className='mt-4 font-semibold'>Check your email for the facebook group link. </p>
                <p className='mt-4 font-semibold'>Inbox us for any kind of information you need.</p>
                <button className="flex justify-center items-center mt-4 px-12 py-4 rounded-lg  text-white text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-700">
                    <FaCheck className='w-6 h-6 me-2 text-white'></FaCheck>
                    <span>Checkout</span> </button>
            </div>

        </div>
    );
};

export default Checkout;