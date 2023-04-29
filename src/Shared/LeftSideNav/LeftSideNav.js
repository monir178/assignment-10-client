import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
const LeftSideNav = () => {
    return (
        <div>
            <button className="flex items-center justify-center mt-4 rounded-lg shadow-md hover:bg-gray-100 w-full">
                <div className="px-4 py-3 text-2xl">
                    <FcGoogle></FcGoogle>
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
            </button>
            <button className="flex items-center justify-center mt-4  rounded-lg shadow-md hover:bg-gray-100 w-full">
                <div className="px-4 py-3 text-2xl">
                    <FaGithub></FaGithub>
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Github</h1>
            </button>
            <button className="flex items-center justify-center my-4  rounded-lg shadow-md hover:bg-gray-100 w-full">
                <div className="px-4 py-3 text-2xl">
                    <FaFacebook></FaFacebook>
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Facebook</h1>
            </button>
        </div>
    );
};

export default LeftSideNav;