import React from 'react';
import animation from '../../../src/assets/animation/team.json';
import Lottie from 'lottie-react';
import Services from './Services';
import MarqueeAnimation from './MarqueeAnimation';



const Team = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center bg-base-200 mt-4' >
                <div className='lg:w-full'>
                    <div className='relative' style={{ paddingTop: '55%' }}>
                        <div className='absolute inset-0 '>
                            <Lottie animationData={animation} loop={true}
                                style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                </div>
                <div className='mt-4 lg:mt-8 w-auto text-left mx-4 lg:mr-8 lg:ms-0  ' data-aos="fade-left">
                    <h2 className='text-lg lg:text-3xl font-semibold text-sky-800 leading-relaxed  ms-0 mb-8'>Know About Our Experienced and Professional Programming and Tech Tutors</h2>
                    <p className='text-lg font-semibold mt-4 mb-8 '>"Learn from our experienced and professional programming and tech tutors. With real-world experience and a passion for teaching, our team is committed to helping you achieve your goals and reach your full potential.</p>
                    <ul className='list-disc list-outside ' >
                        <li className='mb-4 ms-4   text-base'>Our tutors are highly experienced professionals with a deep understanding of programming and tech</li>
                        <li className='mb-4 ms-4 text-base'>They bring a wealth of real-world experience to the classroom, having worked on a variety of projects in the tech industry.</li>
                        <li className='mb-4 ms-4 text-base'>Our tutors are passionate about sharing their knowledge and expertise with learners, and they take a personalized approach to teaching.</li>
                        <li className='mb-4 ms-4 text-base'>They stay up-to-date on the latest trends and technologies, ensuring that learners receive the most relevant and current information.</li>
                    </ul>
                </div>
            </div>
            <MarqueeAnimation></MarqueeAnimation>
            <Services></Services>
        </div>
    );
};

export default Team;
