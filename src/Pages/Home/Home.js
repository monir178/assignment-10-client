import React from 'react';
import Lottie from 'lottie-react';
import animation from '../../../src/assets/animation/animation.json';



const Home = () => {
    // const options = {
    //     animationData: animationData, // The animation JSON data
    //     loop: true, // Set to true if you want the animation to loop
    //     autoplay: true, // Set to true if you want the animation to start playing automatically
    // };
    return (
        <div className=' bg-gradient-to-r  from-cyan-200 to-gray-300 '>
            <div className='relative lg:w-1/2 '>
                <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                    <Lottie animationData={animation} loop={true} />
                </div>
                <img src="../../../public/icon.jpg" alt="" />
            </div>
            <div>

            </div>
        </div>
    );
};



export default Home;