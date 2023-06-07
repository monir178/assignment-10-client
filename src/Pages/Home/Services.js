import React from 'react';
import animation from '../../../src/assets/animation/services.json';
import Lottie from 'lottie-react';
const Services = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center my-10 shadow-xl py-8 bg-base-200'>
                <div className='lg:w-full block lg:hidden'>
                    <div className='relative' style={{ paddingTop: '55%' }}>
                        <div className='absolute inset-0 '>
                            <Lottie animationData={animation} loop={true}
                                style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                </div>

                <div className='mt-4 lg:mt-8 w-auto text-left mx-4 lg:mr-8 lg:ms-8 ' data-aos="fade-right">
                    <h2 className='text-lg lg:text-3xl font-semibold text-sky-800 leading-relaxed  mb-8 ms-0'>Build Your Career</h2>
                    <p className='text-lg font-medium mt-4 mb-8 '>Introducing Our Job Hunter Team: Connecting You with Your Dream Caree</p>
                    <ul className='list-disc list-outside ' >
                        <li className='mb-4 ms-4   text-gray-700 text-base font-semibold'>Our job search services offer personalized support to help you identify job opportunities that align with your skills and career goals.</li>
                        <li className='mb-4 ms-4 text-gray-700 text-base font-semibold'>We provide resume and cover letter writing assistance to help you stand out from other candidates and showcase your unique strengths and experiences.</li>
                        <li className='mb-4 ms-4 text-gray-700 text-base font-semibold'>We also offer networking and career development resources to help you build professional relationships and grow your career over time.</li>

                    </ul>
                </div>
                <div className='lg:w-full lg:block hidden'>
                    <div className='relative' style={{ paddingTop: '55%' }}>
                        <div className='absolute inset-0 '>
                            <Lottie animationData={animation} loop={true}
                                style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;