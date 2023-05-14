import React from 'react';
import backgroundImage from "../../assets/images/background.jpg";
import Team from './Team';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                            style={{ fontFamily: 'Londrina Shadow, cursive' }} className="mb-5 text-base-100 text-4xl lg:text-6xl md:text-5xl font-bold">Empower Your Tech Journey</h1>
                        <p className="mb-5 font-semibold text-base-100">Advance your tech journey and master the latest skills with our expert-led courses and resources. Join a dynamic community of learners and take the first step towards achieving your tech goals today.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div>
                <Team></Team>
            </div>
        </div>
    );
};

export default Home;