import React from 'react';
import backgroundImage from "../../assets/images/background.jpg";
import Team from './Team';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen shadow-lg shadow-gray-400" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 data-aos="zoom-in" data-aos-duration="1000"
                            style={{ fontFamily: 'Londrina Shadow, cursive' }} className="mb-5 text-base-100 text-4xl lg:text-6xl md:text-5xl font-bold">Empower Your Tech Journey</h1>
                        <p className="mb-5 font-medium text-base-100">Advance your tech journey and master the latest skills with our expert-led courses and resources. Join a dynamic community of learners and take the first step towards achieving your tech goals today.</p>
                        <Link to="/courses" data-aos="zoom-in" data-aos-duration="1000">
                            <button className="bg-gray-700 border-2 text-white text-xl font-bold w-3/4 py-3 px-4 rounded-lg hover:bg-gray-600">Explore Our Courses</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Team></Team>
            </div>
        </div>
    );
};

export default Header;