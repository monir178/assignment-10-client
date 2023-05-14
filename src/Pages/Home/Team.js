import React from 'react';
import animation from '../../../src/assets/animation/team.json';
import Lottie from 'lottie-react';

const Team = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-normal'>
            <div className='lg:w-2/4'>
                <div className='relative' style={{ paddingTop: '55%' }}>
                    <div className='absolute inset-0'>
                        <Lottie animationData={animation} loop={true}
                            style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>
            <div className='mt-4 lg:mt-0'>
                <h2>About my team</h2>
            </div>
        </div>
    );
};

export default Team;
