import React from "react";
import animation from '../../../src/assets/animation/error.json';
import Lottie from 'lottie-react';
const ErrorPage = () => {
    return (
        <>
            <div >
                <Lottie animationData={animation} loop={true}
                    style={{ width: '100%', height: '100%' }} />
            </div>
        </>
    );
};

export default ErrorPage;
