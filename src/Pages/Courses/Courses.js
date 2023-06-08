import React from 'react';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Courses = () => {
    const allCourses = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);
    console.log(allCourses);

    useEffect(() => {
        // Simulating a delay for fetching data from the server
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        // Cleanup function to clear the timeout when component unmounts
        return () => clearTimeout(delay);
    }, []);

    //Loading spinner function
    const LoadingSpinner = () => {
        return (
            <div className="flex items-center justify-center h-screen">
                <div class="h-96 shadow rounded-md p-4 w-96 mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div class="flex-1 space-y-6 py-1">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (

        <>
            {
                isLoading ? (
                    <LoadingSpinner></LoadingSpinner>
                ) :
                    (
                        <div className='grid grid-cols-12  mt-0'>
                            <div className='col-span-3 hidden lg:block md:block  '>
                                <LeftSideNav></LeftSideNav>
                            </div>

                            {/* Right side */}
                            <div className='lg:col-span-9 col-span-12 md:col-span-9 mx-auto   w-full'>

                                <h2 className='text-center font-bold text-2xl mt-4  mb-8 text-gray-500'>All Courses</h2>

                                <div data-aos="fade-out" className='grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 gap-4 '>

                                    {
                                        allCourses.map(course => <CourseCard
                                            key={course._id}
                                            course={course}
                                        >
                                        </CourseCard>)
                                    }
                                </div>
                            </div>
                        </div>
                    )
            }
        </>

    );
};

export default Courses;